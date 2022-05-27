import { gql } from '@apollo/client';

const CreateSubscriber = gql`
	mutation CreateSubscriber(
		$firstName: String!
		$lastName: String
		$residency: String!
		$email: String!
	) {
		createSubscriber(
			data: {
				firstName: $firstName
				lastName: $lastName
				countryOfResidence: $residency
				email: $email
			}
		) {
			id
			firstName
			lastName
			countryOfResidence
			email
		}
	}
`;

export default CreateSubscriber;
