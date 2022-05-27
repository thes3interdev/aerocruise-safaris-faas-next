import { gql } from '@apollo/client';

const GetExperiencesPage = gql`
	query GetExperiencesPage {
		informationPage(where: { pageTitle: "Experiences Page" }) {
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

export default GetExperiencesPage;
