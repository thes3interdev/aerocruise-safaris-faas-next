import { gql } from '@apollo/client';

const CreateBooking = gql`
	mutation CreateBooking(
		$destination: String!
		$duration: String!
		$travelDate: Date
		$budget: String!
		$adults: String!
		$children: String!
		$infants: String!
		$comments: String!
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
				adults: $adults
				children: $children
				infants: $infants
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
			adults
			children
			infants
			comments
			firstName
			lastName
			countryOfResidence
			email
		}
	}
`;

export default CreateBooking;
