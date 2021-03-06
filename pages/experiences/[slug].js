import Link from 'next/link';
import NumberFormat from 'react-number-format';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import client from '../../lib/ApolloClient';
import GET_EXPERIENCE_SLUG from '../../graphql/query/GetExperienceSlug';
import GET_EXPERIENCE from '../../graphql/query/GetExperience';
import Meta from '../../lib/Meta';

/**define a list of paths to be statically generated */
export const getStaticPaths = async () => {
	const { data: experiences } = await client.query({
		query: GET_EXPERIENCE_SLUG,
	});

	const paths = experiences.experiences.map((experience) => {
		return {
			params: { slug: experience.slug },
		};
	});

	return {
		paths,

		/** server-render pages on-demand if the path doesn't exist. */
		fallback: 'blocking',
	};
};

/** fetch data at build time */
export const getStaticProps = async ({ params }) => {
	const slug = params.slug;

	const { data: experience } = await client.query({
		query: GET_EXPERIENCE,
		variables: { slug },
	});

	return {
		props: {
			experience: experience.experiences[0],
		},
		revalidate: 34,
	};
};

const Experience = ({ experience }) => {
	return (
		<div>
			{/** title bar start */}
			<Meta
				title={`${experience.name} | An Authentic African Experience | Aerocruise Safaris`}
			/>
			{/** title bar end */}

			{/** hero section start */}
			<section
				className="h-[450px] w-full bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url(${experience.coverImage.url})`,
				}}
			>
				<div className="flex h-full w-full items-center justify-center bg-slate-900/50">
					<div className="text-center uppercase text-slate-100">
						<p className="mb-8 text-sm uppercase">
							From{' '}
							<NumberFormat
								value={experience.price}
								displayType={'text'}
								thousandSeparator={true}
								prefix={'USD '}
							/>{' '}
							| {experience.duration}
						</p>
						<h1 className="mb-3 text-2xl font-bold lg:text-4xl">{experience.name}</h1>
						<h2 className="mb-3 text-lg font-semibold lg:text-xl">
							{experience.location.name}
						</h2>
						<h3 className="mb-2 text-lg font-medium lg:text-xl">{experience.excerpt}</h3>
					</div>
				</div>
			</section>
			{/** hero section end */}

			{/** content section - content start */}
			<section className="mx-auto max-w-5xl transform space-y-5 px-3 pt-8 pb-8">
				<hr className="divider my-5 w-full" />
				<div className="flex items-center justify-center py-4 px-3">
					<h3 className="text-xl font-semibold uppercase text-sky-800">
						Your Journey at a Glance
					</h3>
				</div>
				<hr className="divider my-5 w-full" />
				<div
					dangerouslySetInnerHTML={{
						__html: experience.description.html,
					}}
					className="prose max-w-none prose-headings:text-sky-800 prose-a:text-blue-800"
				/>
			</section>
			{/** content section - content end */}

			{/** image gallery section start */}
			<section className="mx-auto max-w-5xl px-3 pt-4 pb-4">
				<hr className="divider my-5 w-full" />
				<div className="flex items-center justify-center py-4 px-3">
					<h3 className="text-xl font-semibold uppercase text-sky-800">
						Sights of The {experience.name}
					</h3>
				</div>
				<hr className="divider my-5 w-full" />
				<div className="mx-auto columns-3xs gap-5 pt-2">
					{experience.gallery.map((image) => (
						<figure key={image.id} className="py-3 [break-inside:avoid]">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src={image.url} alt={experience.name} className="rounded-lg" />
						</figure>
					))}
				</div>
			</section>
			{/** image gallery section end */}

			{/** experience itenerary start */}
			<section className="mx-auto max-w-5xl px-3 pt-4 pb-4">
				<hr className="divider my-5 w-full" />
				<div className="flex items-center justify-center py-4 px-3">
					<h3 className="text-xl font-semibold uppercase text-sky-800">
						{experience.name} Itenerary
					</h3>
				</div>
				<hr className="divider my-5 w-full" />
				<div className="mt-12 rounded-lg border p-3">
					{experience.itenerary.map((item) => (
						<Disclosure key={item.id}>
							{({ open }) => (
								<div>
									<Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-50 px-4 py-2 text-left text-sm font-medium text-sky-900 hover:bg-sky-200 focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75">
										<span className="text-lg">{item.title}</span>
										<ChevronUpIcon
											className={`${
												open ? 'rotate-180 transform' : ''
											} h-6 w-6 text-sky-800`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="px-5 pt-5 pb-3">
										<div
											dangerouslySetInnerHTML={{
												__html: item.description.html,
											}}
											className="prose max-w-none text-base"
										/>
									</Disclosure.Panel>
								</div>
							)}
						</Disclosure>
					))}
				</div>
			</section>
			{/** experience itenerary end */}

			{/** experience properties start */}
			<section className="mx-auto max-w-5xl px-3 pt-4 pb-4">
				<hr className="divider my-5 w-full" />
				<div className="flex items-center justify-center py-4 px-3">
					<h3 className="text-xl font-semibold uppercase text-sky-800">
						Stay here on The {experience.name}
					</h3>
				</div>
				<hr className="divider my-5 w-full" />
				<div className="mt-12 mb-8 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:space-y-0">
					{experience.properties.map((property) => {
						return (
							<div key={property.id}>
								<Link href={`/properties/${property.slug}`}>
									<a className="block rounded-lg bg-slate-50 shadow-lg">
										{/* eslint-disable-next-line @next/next/no-img-element */}
										<img
											className="h-48 w-full rounded-t-lg object-cover"
											src={property.coverImage.url}
											alt={property.name}
										/>
										<div className="flex flex-col p-6">
											<h2 className="font-semibold uppercase text-sky-800 line-clamp-1">
												{property.name}
											</h2>
											<hr className="divider my-5 w-full" />
											<p className="mt-3 mb-3 line-clamp-1">{property.excerpt}</p>
											<hr className="divider my-5 w-full" />
										</div>
									</a>
								</Link>
							</div>
						);
					})}
				</div>
			</section>
			{/** experience properties end */}

			{/** experience availability start */}
			<section className="mx-auto max-w-5xl px-3 pt-4 pb-4">
				<hr className="divider my-5 w-full" />
				<div className="flex items-center justify-center py-4 px-3">
					<h3 className="text-xl font-semibold uppercase text-sky-800">
						Experience Availabile From{' '}
						<NumberFormat
							value={experience.price}
							displayType={'text'}
							thousandSeparator={true}
							prefix={'USD '}
						/>{' '}
						For {experience.duration}
					</h3>
				</div>
				<hr className="divider my-5 w-full" />
				<div className="mt-12 rounded-lg border p-3">
					{experience.availability.map((item) => (
						<Disclosure key={item.id}>
							{({ open }) => (
								<div>
									<Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-50 px-4 py-2 text-left text-sm font-medium text-sky-900 hover:bg-sky-200 focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75">
										<span className="text-lg">{item.description}</span>
										<ChevronUpIcon
											className={`${
												open ? 'rotate-180 transform' : ''
											} h-6 w-6 text-sky-800`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="px-5 pt-5 pb-3">
										<div className="flex justify-between">
											<div>{item.description}</div>
											<div>
												<NumberFormat
													value={item.price}
													displayType={'text'}
													thousandSeparator={true}
													prefix={item.currency}
												/>
											</div>
										</div>
									</Disclosure.Panel>
								</div>
							)}
						</Disclosure>
					))}
				</div>
			</section>
			{/** experience availability end */}

			{/** experience information start */}
			<section className="mx-auto max-w-5xl px-3 pt-4 pb-4">
				<hr className="divider my-5 w-full" />
				<div className="flex items-center justify-center py-4 px-3">
					<h3 className="text-xl font-semibold uppercase text-sky-800">
						Miscellaneous Information
					</h3>
				</div>
				<hr className="divider my-5 w-full" />
				<div className="mt-12 rounded-lg border p-3">
					{experience.miscellaneousInformation.map((info) => (
						<Disclosure key={info.id}>
							{({ open }) => (
								<div>
									<Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-50 px-4 py-2 text-left text-sm font-medium text-sky-900 hover:bg-sky-200 focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75">
										<span className="text-lg">{info.title}</span>
										<ChevronUpIcon
											className={`${
												open ? 'rotate-180 transform' : ''
											} h-6 w-6 text-sky-800`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="px-5 pt-5 pb-3">
										<div
											dangerouslySetInnerHTML={{
												__html: info.description.html,
											}}
											className="prose max-w-none text-base"
										/>
									</Disclosure.Panel>
								</div>
							)}
						</Disclosure>
					))}
				</div>
				<hr className="divider mt-20 mb-10 w-full" />
			</section>
			{/** experience information end */}

			{/** call to action section start */}
			<section className="mx-auto max-w-7xl">
				<div className="m-8 flex flex-col rounded-lg bg-slate-50 shadow-lg lg:flex-row">
					<div className="order-2 flex h-64 w-full items-center justify-center px-5 py-8 lg:order-1 lg:w-1/2">
						<div className="max-w-xl p-4">
							<h3 className="text-center text-2xl font-medium tracking-wide text-slate-800">
								{experience.callToAction.prompt}
							</h3>
							<div className="mt-6 flex flex-col space-y-3 lg:flex-row lg:space-y-0">
								<Link href={experience.callToAction.link.href}>
									<a className="inline-flex w-full items-center justify-center rounded-lg bg-emerald-700 py-3 px-5 text-lg font-medium uppercase text-white hover:bg-emerald-500">
										{experience.callToAction.link.label}
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="order-1 h-64 w-full lg:order-2 lg:w-1/2">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							className="h-full w-full rounded-t-lg object-cover object-center lg:rounded-t-none lg:rounded-tr-lg lg:rounded-br-lg"
							src={experience.callToAction.coverImage.url}
							alt="Call To Action Featured Image"
						/>
					</div>
				</div>
			</section>
			{/** call to action section end */}
		</div>
	);
};

export default Experience;
