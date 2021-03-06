import { gql } from '@apollo/client';

const GetProperties = gql`
	query GetProperties {
		properties {
			id
			name
			slug
			excerpt
			coverImage {
				url
			}
			callToAction {
				prompt
				coverImage {
					url
				}
				link {
					label
					href
				}
			}
		}
	}
`;

export default GetProperties;
