import client from '../lib/ApolloClient';
import GET_TRADING_TERMS_PAGE from '../graphql/query/GetTradingTermsPage';
import Meta from '../lib/Meta';

/** fetch data at build time */
export const getStaticProps = async () => {
	const { data } = await client.query({
		query: GET_TRADING_TERMS_PAGE,
	});

	return {
		props: {
			terms: data.page,
		},
		revalidate: 60,
	};
};

const TradingTerms = ({ terms }) => {
	return (
		<div>
			{/** title bar start */}
			<Meta title="Trading Terms | An Authentic African Experience | Aerocruise Safaris" />
			{/** title bar end */}

			{/** hero section start */}
			<section
				className="h-96 w-full bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url(${terms.heroSection.heroImage.url})`,
				}}
			>
				<div className="flex h-full w-full items-center justify-center bg-slate-900 bg-opacity-50">
					<div className="text-center text-slate-100">
						<h1 className="mb-2 text-2xl font-semibold uppercase lg:text-3xl">
							{terms.heroSection.title}
						</h1>
						<h3 className="b-4 text-lg font-medium uppercase tracking-wider lg:text-xl">
							{terms.heroSection.subtitle}
						</h3>
					</div>
				</div>
			</section>
			{/** hero section end */}

			{/** content section start */}
			<article className="mx-auto max-w-4xl transform space-y-5 px-4 pt-8 pb-8">
				<div
					dangerouslySetInnerHTML={{
						__html: terms.contentSection.content.html,
					}}
					className="prose max-w-none prose-headings:text-sky-800 prose-a:text-blue-800"
				/>
			</article>
			{/** content section end */}
		</div>
	);
};

export default TradingTerms;
