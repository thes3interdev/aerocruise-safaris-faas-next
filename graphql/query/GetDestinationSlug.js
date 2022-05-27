import { gql } from '@apollo/client';

const GetDestinationSlug = gql`
	query GetDestinationSlug {
		destinations {
			slug
		}
	}
`;

export default GetDestinationSlug;
