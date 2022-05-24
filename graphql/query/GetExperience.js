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
			description {
				html
			}
			price
			duration
			gallery {
				id
				url
			}
			itenerary {
				id
				title
				description {
					html
				}
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
			location {
				__typename
				... on Destination {
					name
				}
			}
			properties {
				__typename
				... on Property {
					id
					name
					slug
					coverImage {
						url
					}
					excerpt
				}
			}
			callToAction {
				__typename
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

export default GetExperience;
