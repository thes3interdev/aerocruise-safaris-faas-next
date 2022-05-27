import { gql } from '@apollo/client';

const GetDestinationsPage = gql`
	query GetDestinationsPage {
		informationPage(where: { pageTitle: "Destinations Page" }) {
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

export default GetDestinationsPage;
