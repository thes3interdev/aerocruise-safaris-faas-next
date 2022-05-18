import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import client from '../../lib/ApolloClient';
import GET_BLOG_POSTS_SLUG from '../../graphql/query/GetBlogPostsSlug';
import GET_BLOG_POST from '../../graphql/query/GetBlogPost';
import Meta from '../../lib/Meta';

/**define a list of paths to be statically generated */
export const getStaticPaths = async () => {
	const { data: postsData } = await client.query({
		query: GET_BLOG_POSTS_SLUG,
	});
	const paths = postsData.posts.data.map((post) => {
		return {
			params: { slug: post.attributes.slug },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

/** fetch data at build time */
export const getStaticProps = async ({ params }) => {
	const slug = params.slug;
	const { data: postData } = await client.query({
		query: GET_BLOG_POST,
		variables: { slug },
	});

	return {
		props: {
			post: postData.posts.data[0].attributes,
		},
		revalidate: 89,
	};
};

const Blog = ({ post }) => {
	return (
		<div>
			{/** title bar start */}
			<Meta
				title={`${post.title} | An Authentic African Experience | Aerocruise Safaris`}
			/>
			{/** title bar end */}

			{/** hero section start */}
			<section
				className="h-96 w-full bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url(${post.cover_image.data.attributes.url})`,
				}}
			>
				<div className="flex h-full w-full items-center justify-center bg-slate-900 bg-opacity-50">
					<div className="text-center text-slate-100">
						<h1 className="mb-2 text-2xl font-semibold uppercase lg:text-3xl">
							{post.title}
						</h1>
					</div>
				</div>
			</section>
			{/** hero section end */}

			{/** content section start */}
			<section className="mx-auto max-w-4xl px-2 pt-8 pb-16">
				{/** content section - excerpt start */}
				<h3 className="px-3 pb-6 text-lg">{post.excerpt}</h3>
				{/** content section - excerpt end */}

				<hr className="divider my-5 w-full" />

				{/** content section - author name plate top start */}
				<section className="flex items-center justify-between py-4 px-3">
					<div className="flex items-center space-x-3">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={post.author.data.attributes.photo.data.attributes.url}
							alt={post.author.data.attributes.name}
							className="h-8 w-8 rounded-full"
						/>
						<h4>{post.author.data.attributes.name}</h4>
					</div>
					<p className="text-sm">{format(parseISO(post.publishedAt), 'MMMM do, yyyy')}</p>
				</section>
				{/** content section - author name plate top end */}

				<hr className="divider my-5 w-full" />

				{/** content section - content start */}
				<section className="mx-auto max-w-4xl transform space-y-5 px-3 pt-8 pb-8">
					<div
						dangerouslySetInnerHTML={{ __html: post.content }}
						className="prose max-w-none prose-headings:text-sky-800 prose-a:text-blue-800"
					/>
				</section>
				{/** content section - content end */}

				<hr className="divider my-5 w-full" />

				{/** content section - author name plate top start */}
				<section className="flex items-center justify-between py-4 px-3">
					<div className="flex items-center space-x-3">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={post.author.data.attributes.photo.data.attributes.url}
							alt={post.author.data.attributes.name}
							className="h-8 w-8 rounded-full"
						/>
						<h4>{post.author.data.attributes.name}</h4>
					</div>
					<p className="text-sm">{format(parseISO(post.publishedAt), 'MMMM do, yyyy')}</p>
				</section>
				{/** content section - author name plate top end */}

				<hr className="divider my-5 w-full" />
			</section>
			{/** content section end */}

			{/** call to action section start */}
			<section className="mx-auto max-w-7xl">
				<div className="m-8 flex flex-col rounded-lg bg-slate-50 shadow-lg lg:flex-row">
					<div className="order-2 flex h-64 w-full items-center justify-center px-5 py-8 lg:order-1 lg:w-1/2">
						<div className="max-w-xl p-4">
							<h3 className="text-center text-2xl font-medium tracking-wide text-slate-800">
								{post.action.data.attributes.prompt}
							</h3>
							<div className="mt-6 flex flex-col space-y-3 lg:flex-row lg:space-y-0">
								<Link href={post.action.data.attributes.link.href}>
									<a className="inline-flex w-full items-center justify-center rounded-lg bg-emerald-700 py-3 px-5 text-lg font-medium uppercase text-white hover:bg-emerald-500">
										{post.action.data.attributes.link.label}
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="order-1 h-64 w-full lg:order-2 lg:w-1/2">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							className="h-full w-full rounded-t-lg object-cover object-center lg:rounded-t-none lg:rounded-tr-lg lg:rounded-br-lg"
							src={post.action.data.attributes.cover_image.data.attributes.url}
							alt="Call To Action Featured Image"
						/>
					</div>
				</div>
			</section>
			{/** call to action section end */}
		</div>
	);
};

export default Blog;
