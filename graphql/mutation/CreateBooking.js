import { gql } from '@apollo/client';

const CreateBooking = gql`
	mutation CreateBooking(
		$destination: String!
		$duration: String!
		$travelDate: Date
		$budget: String!
		$comments: String
		$firstName: String!
		$lastName: String
		$countryOfResidence: String!
		$email: String!
	) {
		createBooking(
			data: {
				destination: $destination
				duration: $duration
				travelDate: $travelDate
				budget: $budget
				comments: $comments
				firstName: $firstName
				lastName: $lastName
				countryOfResidence: $countryOfResidence
				email: $email
			}
		) {
			id
			destination
			duration
			travelDate
			budget
			comments
			firstName
			lastName
			countryOfResidence
			email
		}
	}
`;

export default CreateBooking;
