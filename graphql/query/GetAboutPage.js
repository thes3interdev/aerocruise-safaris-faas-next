import { gql } from '@apollo/client';

const GetAboutPage = gql`
	query GetAboutPage {
		informationPage(where: { pageTitle: "About Page" }) {
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

export default GetAboutPage;
