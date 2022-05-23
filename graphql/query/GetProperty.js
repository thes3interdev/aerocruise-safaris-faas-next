import { gql } from '@apollo/client';

const GetProperty = gql`
	query GetProperties($slug: String!) {
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
				description
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
