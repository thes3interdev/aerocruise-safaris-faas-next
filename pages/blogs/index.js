import client from '../../lib/ApolloClient';
import GET_BLOGS_PAGE from '../../graphql/query/GetBlogsPage';
import Meta from '../../lib/Meta';
import CallToActionCard from '../../components/CallToActionCard';

/** fetch data at build time and refresh data every 2 minutes */
export const getStaticProps = async () => {
	const { data } = await client.query({
		query: GET_BLOGS_PAGE,
	});

	return {
		props: {
			content: data.blog.data.attributes,
		},
		revalidate: 144,
	};
};

const Blogs = ({ content }) => {
	return (
		<div>
			{/** title bar start */}
			<Meta title="Blogs | An Authentic African Experience | Aerocruise Safaris" />
			{/** title bar end */}

			{/** hero section start */}
			<section
				className="h-96 w-full bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url(${content.hero.hero_image.data.attributes.url})`,
				}}
			>
				<div className="flex h-full w-full items-center justify-center bg-slate-900 bg-opacity-50">
					<div className="text-center text-slate-100">
						<h1 className="mb-2 text-2xl font-semibold uppercase lg:text-3xl">
							{content.hero.header.title}
						</h1>
						<h3 className="b-4 text-lg font-medium uppercase tracking-wider lg:text-xl">
							{content.hero.header.subtitle}
						</h3>
					</div>
				</div>
			</section>
			{/** hero section end */}

			{/** content header section start */}
			<section className="mx-auto max-w-4xl px-8 pt-10">
				<div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-4xl">
					<div>
						<p className="mb-4 inline-block rounded-full bg-emerald-800 px-3 py-px text-xs font-semibold uppercase tracking-wider text-slate-100">
							{content.content.label}
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
							<span className="relative">{content.content.title}</span>
						</span>
					</h2>
					<p className="text-base md:text-lg">{content.content.subtitle}</p>
				</div>
			</section>
			{/** content header section end */}

			{/** content blog grid section start */}
			{/** content blog grid section end */}

			{/** call to action section start */}
			<CallToActionCard
				prompt={content.cta.data.attributes.prompt}
				image={content.cta.data.attributes.featured_image.data.attributes.url}
				label={content.cta.data.attributes.link.label}
				href={content.cta.data.attributes.link.href}
			/>
			{/** call to action section end */}
		</div>
	);
};

export default Blogs;
