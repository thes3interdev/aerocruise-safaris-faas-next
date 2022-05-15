import { gql } from '@apollo/client';
import client from '../lib/ApolloClient';
import Meta from '../lib/Meta';

/** fetch data at build time */
export const getStaticProps = async () => {
	const { data } = await client.query({
		query: gql`
			query GetTradingTerms {
				tradingTerm {
					data {
						attributes {
							hero {
								hero_image {
									data {
										attributes {
											url
										}
									}
								}
								header {
									title
									subtitle
								}
							}
							content {
								content
							}
						}
					}
				}
			}
		`,
	});

	return {
		props: {
			terms: data.tradingTerm.data.attributes,
		},
		revalidate: 4181,
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
					backgroundImage: `url(${terms.hero.hero_image.data.attributes.url})`,
				}}
			>
				<div className="flex h-full w-full items-center justify-center bg-slate-900 bg-opacity-50">
					<div className="text-center text-slate-100">
						<h1 className="mb-2 text-2xl font-semibold uppercase lg:text-3xl">
							{terms.hero.header.title}
						</h1>
						<h3 className="b-4 text-lg font-medium uppercase tracking-wider lg:text-xl">
							{terms.hero.header.subtitle}
						</h3>
					</div>
				</div>
			</section>
			{/** hero section end */}

			{/** content section start */}
			<article className="mx-auto max-w-4xl transform space-y-5 px-4 pt-8 pb-8">
				<div
					dangerouslySetInnerHTML={{
						__html: terms.content.content,
					}}
					className="prose max-w-none prose-headings:text-sky-800 prose-a:text-blue-800"
				/>
			</article>
			{/** content section end */}
		</div>
	);
};

export default TradingTerms;
