import { gql } from '@apollo/client';

const GetBookingRequestPage = gql`
	query GetBookingRequestPage {
		collectionPage(where: { pageTitle: "Booking Requests Page" }) {
			heroSection {
				heroImage {
					url
				}
				title
				subtitle
			}
			contentSection {
				content {
					html
				}
			}
			callToAction {
				coverImage {
					url
				}
				prompt
				link {
					href
					label
				}
			}
		}
	}
`;

export default GetBookingRequestPage;
