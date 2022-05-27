import { gql } from '@apollo/client';

const GetDestinations = gql`
	query GetDestinations {
		destinations {
			id
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
