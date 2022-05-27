import { gql } from '@apollo/client';

const GetProperty = gql`
	query GetProperty($slug: String!) {
		properties(where: { slug: $slug }) {
			id
			name
			slug
			excerpt
			coverImage {
				url
			}
			description {
				html
			}
			gallery {
				id
				url
			}
			amenities {
				id
				title
				description {
					html
				}
			}
			location {
				... on Destination {
					name
				}
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

export default GetProperty;
