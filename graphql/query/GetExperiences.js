import { gql } from '@apollo/client';

const GetExperiences = gql`
	query GetExperiences {
		experiences {
			id
			name
			slug
			coverImage {
				url
			}
			excerpt
			price
			duration
		}
	}
`;

export default GetExperiences;
