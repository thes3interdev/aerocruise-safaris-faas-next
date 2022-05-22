import Link from 'next/link';
import client from '../../lib/ApolloClient';
import GET_DESTINATIONS_PAGE from '../../graphql/query/GetDestinationsPage';
import GET_DESTINATIONS from '../../graphql/query/GetDestinations';
import Meta from '../../lib/Meta';

/** fetch data at build time */
export const getStaticProps = async () => {
	const { data: page } = await client.query({
		query: GET_DESTINATIONS_PAGE,
	});

	const { data: destinations } = await client.query({
		query: GET_DESTINATIONS,
	});

	return {
		props: {
			page: page.informationPage,
			destinations: destinations.destinations,
		},
		revalidate: 60,
	};
};

const Destinations = ({ page, destinations }) => {
	return (
		<div>
			{/** title bar start */}
			<Meta title="Destinations | An Authentic African Experience | Aerocruise Safaris" />
			{/** title bar end */}

			{/** hero section start */}
			<section
				className="h-[450px] w-full bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url(${page.heroSection.heroImage.url})`,
				}}
			>
				<div className="flex h-full w-full items-center justify-center bg-slate-900 bg-opacity-50">
					<div className="text-center text-slate-100">
						<h1 className="mb-2 text-2xl font-semibold uppercase lg:text-3xl">
							{page.heroSection.title}
						</h1>
						<h3 className="b-4 text-lg font-medium uppercase tracking-wider lg:text-xl">
							{page.heroSection.subtitle}
						</h3>
					</div>
				</div>
			</section>
			{/** hero section end */}

			{/** header section start */}
			<section className="mx-auto max-w-4xl px-8 pt-10">
				<div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-4xl">
					<div>
						<p className="mb-4 inline-block rounded-full bg-emerald-800 px-3 py-px text-xs font-semibold uppercase tracking-wider text-slate-100">
							{page.headerSection.label}
						</p>
					</div>
					<h2 className="mb-6 max-w-lg text-3xl font-bold leading-none tracking-tight text-sky-800 sm:text-4xl md:mx-auto">
						<span className="relative inline-block">
							<svg
								viewBox="0 0 52 24"
								fillRule="currentColor"
								className="absolute top-0 left-0 z-0 -mt-8 -ml-20 hidden w-32 text-slate-800 sm:block lg:-ml-28 lg:-mt-10 lg:w-32"
							>
								<defs>
									<pattern
										id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
										x="0"
										y="0"
										width=".135"
										height=".30"
									>
										<circle cx="1" cy="1" r=".7" />
									</pattern>
								</defs>
								<rect
									fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
									width="55"
									height="21"
								/>
							</svg>
							<span className="relative">{page.headerSection.title}</span>
						</span>
					</h2>
					<p className="text-base md:text-lg">{page.headerSection.subtitle}</p>
				</div>
			</section>
			{/** header section end */}

			{/** destinations grid section start */}
			<div className="mx-auto max-w-6xl transform px-4 pb-8 sm:px-6 lg:mt-24 lg:px-8 lg:pb-16">
				<div className="mt-12 mb-8 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:space-y-0">
					{destinations.map((destination) => {
						return (
							<div key={destination.id}>
								<Link href={`/destinations/${destination.slug}`}>
									<a className="block rounded-lg bg-slate-50 shadow-lg">
										{/* eslint-disable-next-line @next/next/no-img-element */}
										<img
											className="h-48 w-full rounded-t-lg object-cover"
											src={destination.coverImage.url}
											alt={destination.name}
										/>
										<div className="flex flex-col p-6">
											<h2 className="font-semibold uppercase text-sky-800 line-clamp-1">
												{destination.name}
											</h2>
											<hr className="divider my-5 w-full" />
											<p className="mt-3 mb-3 line-clamp-4">{destination.excerpt}</p>
											<hr className="divider my-5 w-full" />
										</div>
									</a>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
			{/** destinations grid section end */}

			{/** call to action section start */}
			<section className="mx-auto max-w-7xl">
				<div className="m-8 flex flex-col rounded-lg bg-slate-50 shadow-lg lg:flex-row">
					<div className="order-2 flex h-64 w-full items-center justify-center px-5 py-8 lg:order-1 lg:w-1/2">
						<div className="max-w-xl p-4">
							<h3 className="text-center text-2xl font-medium tracking-wide text-slate-800">
								{page.callToAction.prompt}
							</h3>
							<div className="mt-6 flex flex-col space-y-3 lg:flex-row lg:space-y-0">
								<Link href={page.callToAction.link.href}>
									<a className="inline-flex w-full items-center justify-center rounded-lg bg-emerald-700 py-3 px-5 text-lg font-medium uppercase text-white hover:bg-emerald-500">
										{page.callToAction.link.label}
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="order-1 h-64 w-full lg:order-2 lg:w-1/2">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							className="h-full w-full rounded-t-lg object-cover object-center lg:rounded-t-none lg:rounded-tr-lg lg:rounded-br-lg"
							src={page.callToAction.coverImage.url}
							alt="Call To Action Featured Image"
						/>
					</div>
				</div>
			</section>
			{/** call to action section end */}
		</div>
	);
};

export default Destinations;
