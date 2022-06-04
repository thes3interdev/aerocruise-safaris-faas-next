import { gql } from '@apollo/client';

const CreateSubscriber = gql`
	mutation CreateSubscriber(
		$firstName: String!
		$lastName: String
		$countryOfResidence: String!
		$email: String!
	) {
		createSubscriber(
			data: {
				firstName: $firstName
				lastName: $lastName
				countryOfResidence: $countryOfResidence
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
