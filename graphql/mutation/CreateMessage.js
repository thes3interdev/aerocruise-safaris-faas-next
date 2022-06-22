import { gql } from '@apollo/client';

const CreateMessage = gql`
	mutation CreateMessage(
		$name: String!
		$email: String!
		$subject: String
		$message: String!
	) {
		createMessage(
			data: { name: $name, email: $email, subject: $subject, message: $message }
		) {
			id
			name
			email
			subject
			message
		}
	}
`;

export default CreateMessage;
