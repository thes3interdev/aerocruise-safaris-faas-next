import { gql } from '@apollo/client';

const GetDestinations = gql`
	query GetDestinations {
		destinations {
			name
			slug
			coverImage {
				url
			}
			officialName
			excerpt
		}
	}
`;

export default GetDestinations;
