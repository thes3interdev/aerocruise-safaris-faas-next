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
		revalidate: 60,
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
				className="h-96 w-full bg-cover bg-center bg-no-repeat"
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
