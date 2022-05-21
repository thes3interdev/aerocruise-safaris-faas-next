import { gql } from '@apollo/client';

const GetBlogsPage = gql`
	query GetBlogsPage {
		informationPage(where: { pageTitle: "Blogs Page" }) {
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

export default GetBlogsPage;
