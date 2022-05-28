import { gql } from '@apollo/client';

const GetReviewsPage = gql`
	query GetReviewsPage {
		informationPage(where: { pageTitle: "Reviews Page" }) {
			heroSection {
				heroImage {
					url
				}
				title
				subtitle
			}
			headerSection {
				label
				title
				subtitle
			}
			callToAction {
				prompt
				coverImage {
					url
				}
				link {
					label
					href
				}
			}
		}
	}
`;

export default GetReviewsPage;
