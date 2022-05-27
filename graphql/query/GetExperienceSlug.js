import { gql } from '@apollo/client';

const GetExperienceSlug = gql`
	query GetExperienceSlug {
		experiences {
			slug
		}
	}
`;

export default GetExperienceSlug;
