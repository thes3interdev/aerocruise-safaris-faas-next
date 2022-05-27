import Link from 'next/link';
import client from '../../lib/ApolloClient';
import GET_DESTINATION_SLUG from '../../graphql/query/GetDestinationSlug';
import GET_DESTINATION from '../../graphql/query/GetDestination';
import Meta from '../../lib/Meta';

/**define a list of paths to be statically generated */
export const getStaticPaths = async () => {
	const { data: destinations } = await client.query({
		query: GET_DESTINATION_SLUG,
	});

	const paths = destinations.destinations.map((destination) => {
		return {
			params: { slug: destination.slug },
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

	const { data: destination } = await client.query({
		query: GET_DESTINATION,
		variables: { slug },
	});

	return {
		props: {
			destination: destination.destinations[0],
		},
		revalidate: 34,
	};
};

const Destination = ({ destination }) => {
	return (
		<div>
			{/** title bar start */}
			<Meta
				title={`${destination.name} | An Authentic African Experience | Aerocruise Safaris`}
			/>
			{/** title bar end */}

			{/** hero section start */}
			<section
				className="h-[450px] w-full bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url(${destination.coverImage.url})`,
				}}
			>
				<div className="flex h-full w-full items-center justify-center bg-slate-900/50">
					<div className="text-center uppercase text-slate-100">
						<h1 className="mb-3 text-2xl font-bold lg:text-4xl">{destination.name}</h1>
					</div>
				</div>
			</section>
			{/** hero section end */}

			{/** information section top start */}
			<section className="mx-auto max-w-5xl px-2 pt-8 pb-8">
				<div className="flex flex-col items-center p-3 tracking-wide md:flex-row">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						className="h-[300px] w-[300px] rounded-lg object-cover object-center"
						src={destination.featuredImage.url}
						alt={destination.name}
					/>
					<div className="md:ml-5">
						<hr className="divider my-5 w-full" />
						<h3 className="mb-2 text-2xl font-bold text-sky-800">
							{destination.officialName}
						</h3>
						<p className="mb-3">{destination.excerpt}</p>
						<hr className="divider my-5 w-full" />
					</div>
				</div>
			</section>
			{/** information section top end */}

			{/** description section start */}
			<section className="mx-auto max-w-5xl transform space-y-5 px-3 pt-4 pb-4">
				<div
					dangerouslySetInnerHTML={{
						__html: destination.description.html,
					}}
					className="prose max-w-none prose-headings:text-sky-800 prose-a:text-blue-800"
				/>
			</section>
			{/** description section end */}

			{/** image gallery section start */}
			<section className="mx-auto max-w-5xl px-3 pt-4 pb-4">
				<hr className="divider my-5 w-full" />
				<div className="flex items-center justify-center py-4 px-3">
					<h3 className="text-lg font-semibold uppercase text-sky-800">
						Sights of {destination.name}
					</h3>
				</div>
				<hr className="divider my-5 w-full" />
				<div className="mx-auto columns-3xs gap-5 pt-2">
					{destination.gallery.map((image) => (
						<figure key={image.id} className="py-3 [break-inside:avoid]">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src={image.url} alt={destination.name} className="rounded-lg" />
						</figure>
					))}
				</div>
			</section>
			{/** image gallery section end */}

			{/** miscellaneous section bottom start */}
			<section className="mx-auto max-w-5xl px-3 pt-4 pb-4">
				<hr className="divider my-5 w-full" />
				<div className="flex items-center justify-center py-4 px-3">
					<h3 className="text-lg font-semibold uppercase text-sky-800">
						Camps, Hotels, Lodges &amp; Experiences in {destination.name}
					</h3>
				</div>
				<hr className="divider my-5 w-full" />
				<div className="grid grid-cols-1 gap-x-5 gap-y-5 px-5 pt-8 lg:grid-cols-2">
					<div>
						<Link href="/properties">
							<a className="block max-w-sm space-y-3 rounded-lg border border-slate-200 bg-sky-100 p-5 text-center shadow-md hover:bg-sky-200">
								<h5 className="mb-2 text-xl font-medium text-sky-800">
									Camps, Hotels &amp; Lodges
								</h5>
								<p className="tracking-wide">
									We have an excellent network of camps, lodges and hotels, selected
									according to our exacting standards.
								</p>
							</a>
						</Link>
					</div>
					<div>
						<Link href="/experiences">
							<a className="block max-w-sm space-y-3 rounded-lg border border-slate-200 bg-sky-100 p-5 text-center shadow-md hover:bg-sky-200">
								<h5 className="mb-2 text-xl font-medium text-sky-800">Experiences</h5>
								<p className="tracking-wide">
									Each moment on an Aerocruise safari is sublime, but it is the
									experiences stand out.
								</p>
							</a>
						</Link>
					</div>
				</div>
				<hr className="divider mt-16 mb-4 w-full" />
			</section>
			{/** miscellaneous section bottom end */}

			{/** call to action section start */}
			<section className="mx-auto max-w-7xl">
				<div className="m-8 flex flex-col rounded-lg bg-slate-50 shadow-lg lg:flex-row">
					<div className="order-2 flex h-64 w-full items-center justify-center px-5 py-8 lg:order-1 lg:w-1/2">
						<div className="max-w-xl p-4">
							<h3 className="text-center text-2xl font-medium tracking-wide text-slate-800">
								{destination.callToAction.prompt}
							</h3>
							<div className="mt-6 flex flex-col space-y-3 lg:flex-row lg:space-y-0">
								<Link href={destination.callToAction.link.href}>
									<a className="inline-flex w-full items-center justify-center rounded-lg bg-emerald-700 py-3 px-5 text-lg font-medium uppercase text-white hover:bg-emerald-500">
										{destination.callToAction.link.label}
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="order-1 h-64 w-full lg:order-2 lg:w-1/2">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							className="h-full w-full rounded-t-lg object-cover object-center lg:rounded-t-none lg:rounded-tr-lg lg:rounded-br-lg"
							src={destination.callToAction.coverImage.url}
							alt="Call To Action Featured Image"
						/>
					</div>
				</div>
			</section>
			{/** call to action section end */}
		</div>
	);
};

export default Destination;
