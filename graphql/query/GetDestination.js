import { gql } from '@apollo/client';

const GetDestination = gql`
	query GetDestination($slug: String!) {
		destinations(where: { slug: $slug }) {
			name
			slug
			coverImage {
				url
			}
			officialName
			excerpt
			featuredImage {
				url
			}
			description {
				html
			}
			gallery {
				id
				url
			}
			callToAction {
				coverImage {
					url
				}
				prompt
				link {
					label
					href
				}
			}
		}
	}
`;

export default GetDestination;
