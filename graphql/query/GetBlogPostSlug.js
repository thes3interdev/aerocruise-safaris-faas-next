import { gql } from '@apollo/client';

const GetBlogPostSlug = gql`
	query GetBlogPostSlug {
		posts {
			data {
				attributes {
					slug
				}
			}
		}
	}
`;

export default GetBlogPostSlug;
