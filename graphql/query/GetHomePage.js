import { gql } from '@apollo/client';

const HomePage = gql`
	query GetHomePage {
		informationPage(where: { pageTitle: "Home Page" }) {
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

export default HomePage;