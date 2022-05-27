import { gql } from '@apollo/client';

const GetPropertiesPage = gql`
	query GetPropertiesPage {
		informationPage(where: { pageTitle: "Properties Page" }) {
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

export default GetPropertiesPage;
