import { gql } from '@apollo/client';

const GetBlogPostsPage = gql`
	query GetBlogPostsPage {
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

export default GetBlogPostsPage;
