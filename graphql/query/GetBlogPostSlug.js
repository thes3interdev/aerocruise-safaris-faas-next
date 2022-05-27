import { gql } from '@apollo/client';

const GetBlogPostSlug = gql`
	query GetBlogPostSlug {
		blogPosts {
			slug
		}
	}
`;

export default GetBlogPostSlug;
