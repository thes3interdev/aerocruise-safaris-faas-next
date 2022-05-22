import { gql } from '@apollo/client';

const GetSubscriptionsPage = gql`
	query GetSubscriptionsPage {
		collectionPage(where: { pageTitle: "Subscriptions Page" }) {
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

export default GetSubscriptionsPage;
