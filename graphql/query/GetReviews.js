import { gql } from '@apollo/client';

const GetReviews = gql`
	query GetReviews {
		guestReviews {
			id
			guestName
			destination {
				name
				coverImage {
					url
				}
			}
			travelDate
			review {
				html
			}
		}
	}
`;

export default GetReviews;
