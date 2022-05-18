import { gql } from '@apollo/client';

const GetBlogPostsSlug = gql`
	query GetBlogPostsSlug {
		posts {
			data {
				attributes {
					slug
				}
			}
		}
	}
`;

export default GetBlogPostsSlug;
