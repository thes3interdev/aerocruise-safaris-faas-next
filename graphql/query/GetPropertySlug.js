import { gql } from '@apollo/client';

const GetPropertySlug = gql`
	query GetPropertySlug {
		properties {
			slug
		}
	}
`;

export default GetPropertySlug;
