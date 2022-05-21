import { gql } from '@apollo/client';

const GetDestinationSlug = gql`
	query GetDestinations {
		destinations {
			slug
		}
	}
`;

export default GetDestinationSlug;
