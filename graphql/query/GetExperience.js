import { gql } from '@apollo/client';

const GetExperience = gql`
	query GetExperiences($slug: String!) {
		experiences(where: { slug: $slug }) {
			id
			name
			slug
			coverImage {
				url
			}
			excerpt
			price
			duration
			gallery {
				url
			}
			itenerary {
				id
				title
				description {
					html
				}
			}
			rates {
				id
				description
				price
			}
			availability {
				id
				description
				currency
				price
			}
			miscellaneousInformation {
				id
				title
				description {
					html
				}
			}
		}
	}
`;

export default GetExperience;
