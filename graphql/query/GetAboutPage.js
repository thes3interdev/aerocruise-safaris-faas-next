import { gql } from '@apollo/client';

const GetAboutPage = gql`
	query GetAboutPage {
		aboutPage(where: { pageTitle: "About Page" }) {
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
			ourServicesHeader {
				title
				subtitle
			}
			ourServicesList {
				id
				title
				description {
					html
				}
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
