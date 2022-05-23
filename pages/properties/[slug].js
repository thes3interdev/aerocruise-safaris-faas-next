import Link from 'next/link';
import client from '../../lib/ApolloClient';
import GET_PROPERTY_SLUG from '../../graphql/query/GetPropertySlug';
import GET_PROPERTY from '../../graphql/query/GetProperty';
import Meta from '../../lib/Meta';

/**define a list of paths to be statically generated */
export const getStaticPaths = async () => {
	const { data: properties } = await client.query({
		query: GET_PROPERTY_SLUG,
	});

	const paths = properties.properties.map((property) => {
		return {
			params: { slug: property.slug },
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

	const { data: property } = await client.query({
		query: GET_PROPERTY,
		variables: { slug },
	});

	return {
		props: {
			property: property.properties[0],
		},
		revalidate: 34,
	};
};

const Property = ({ property }) => {
	return (
		<div>
			{/** title bar start */}
			<Meta
				title={`${property.name} | An Authentic African Experience | Aerocruise Safaris`}
			/>
			{/** title bar end */}

			{/** hero section start */}
			<section
				className="h-[450px] w-full bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url(${property.coverImage.url})`,
				}}
			>
				<div className="flex h-full w-full items-center justify-center bg-slate-900/50">
					<div className="text-center uppercase text-slate-100">
						<h1 className="mb-3 text-2xl font-bold lg:text-4xl">{property.name}</h1>
						<h3 className="mb-2 text-lg font-semibold lg:text-xl">{property.excerpt}</h3>
					</div>
				</div>
			</section>
			{/** hero section end */}

			{/** information section start */}
			<section className="mx-auto max-w-4xl px-2 pt-8 pb-8">
				<hr className="divider my-5 w-full" />
				<div className="flex items-center justify-center py-4 px-3">
					<h3 className="text-lg font-semibold uppercase">
						Location: {property.location.name}
					</h3>
				</div>
				<hr className="divider my-5 w-full" />
			</section>
			{/** information section end */}

			{/** content section - content start */}
			<section className="mx-auto max-w-4xl transform space-y-5 px-3 pt-4 pb-4">
				<div
					dangerouslySetInnerHTML={{
						__html: property.description.html,
					}}
					className="prose max-w-none prose-headings:text-sky-800 prose-a:text-blue-800"
				/>
			</section>
			{/** content section - content end */}

			{/** property image gallery start */}
			<section className="mx-auto  max-w-4xl px-3 pt-4 pb-4">
				<hr className="divider my-5 w-full" />
				<div className="flex items-center justify-center py-4 px-3">
					<h3 className="text-lg font-semibold uppercase text-sky-800">
						Sights of The {property.name}
					</h3>
				</div>
				<hr className="divider my-5 w-full" />
				<div className="mx-auto columns-3xs gap-5 pt-2">
					{property.gallery.map((image) => (
						<figure key={image.id} className="py-3 [break-inside:avoid]">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src={image.url} alt={property.name} className="rounded-lg" />
						</figure>
					))}
				</div>
			</section>
			{/** property image gallery end */}

			{/** property amenities start */}
			{!(property.amenities == 0) && (
				<section className="mx-auto max-w-4xl px-3 pt-4 pb-4">
					<hr className="divider my-5 w-full" />
					<div className="flex items-center justify-center py-4 px-3">
						<h3 className="text-lg font-semibold uppercase text-sky-800">
							Amenities at The {property.name}
						</h3>
					</div>
					<hr className="divider my-5 w-full" />
					<div className="m-3">
						<ul className="grid grid-cols-1 gap-5 py-8 text-sky-800 sm:grid-cols-3">
							{property.amenities.map((amenity) => (
								<li key={amenity.id} className="flex">
									<div className="mr-2 h-6 w-6 rounded-full bg-sky-200 p-1">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-4 w-4"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									{amenity.title}
								</li>
							))}
						</ul>
					</div>
				</section>
			)}
			{/** property amenities end */}

			{/** divider start */}
			<section className="mx-auto  max-w-4xl px-3 pt-4 pb-4">
				<hr className="divider my-5 w-full" />
			</section>
			{/** divider end */}

			{/** call to action section start */}
			<section className="mx-auto max-w-7xl">
				<div className="m-8 flex flex-col rounded-lg bg-slate-50 shadow-lg lg:flex-row">
					<div className="order-2 flex h-64 w-full items-center justify-center px-5 py-8 lg:order-1 lg:w-1/2">
						<div className="max-w-xl p-4">
							<h3 className="text-center text-2xl font-medium tracking-wide text-slate-800">
								{property.callToAction.prompt}
							</h3>
							<div className="mt-6 flex flex-col space-y-3 lg:flex-row lg:space-y-0">
								<Link href={property.callToAction.link.href}>
									<a className="inline-flex w-full items-center justify-center rounded-lg bg-emerald-700 py-3 px-5 text-lg font-medium uppercase text-white hover:bg-emerald-500">
										{property.callToAction.link.label}
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="order-1 h-64 w-full lg:order-2 lg:w-1/2">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							className="h-full w-full rounded-t-lg object-cover object-center lg:rounded-t-none lg:rounded-tr-lg lg:rounded-br-lg"
							src={property.callToAction.coverImage.url}
							alt="Call To Action Featured Image"
						/>
					</div>
				</div>
			</section>
			{/** call to action section end */}
		</div>
	);
};

export default Property;
