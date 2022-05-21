import { gql } from '@apollo/client';

const GetBlogPosts = gql`
	query GetBlogPosts {
		blogPosts {
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
		}
	}
`;

export default GetBlogPosts;
