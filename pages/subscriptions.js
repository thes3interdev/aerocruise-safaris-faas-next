import Link from 'next/link';
import client from '../lib/ApolloClient';
import GET_SUBSCRIPTIONS_PAGE from '../graphql/query/GetSubscriptionsPage';
import Meta from '../lib/Meta';

/** fetch data at build time */
export const getStaticProps = async () => {
	const { data } = await client.query({
		query: GET_SUBSCRIPTIONS_PAGE,
	});

	return {
		props: {
			page: data.collectionPage,
		},
		revalidate: 60,
	};
};

const Subscriptions = ({ page }) => {
	return (
		<div>
			{/** title bar start */}
			<Meta title="Subscriptions | An Authentic African Experience | Aerocruise Safaris" />
			{/** title bar end */}

			{/** hero section start */}
			<section
				className="h-96 w-full bg-cover bg-center bg-no-repeat"
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

			{/** content section start */}
			<article className="mx-auto max-w-4xl transform space-y-5 px-4 pt-8 pb-8">
				<div
					dangerouslySetInnerHTML={{
						__html: page.contentSection.content.html,
					}}
					className="prose max-w-none prose-headings:text-sky-800 prose-a:text-blue-800"
				/>
			</article>
			{/** content section end */}

			{/** subscriptions form start */}

			{/** subscriptions form end */}

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

export default Subscriptions;
