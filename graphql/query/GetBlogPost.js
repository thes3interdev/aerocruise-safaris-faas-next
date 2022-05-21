import { gql } from '@apollo/client';

const GetBlogPost = gql`
	query GetBlogPost($slug: String!) {
		blogPosts(where: { slug: $slug }) {
			title
			slug
			excerpt
			coverImage {
				url
			}
			blogAuthor {
				name
				photo {
					url
				}
			}
			publishedAt
			callToAction {
				coverImage {
					url
				}
				prompt
				link {
					label
					href
				}
			}
			content {
				html
			}
		}
	}
`;

export default GetBlogPost;
