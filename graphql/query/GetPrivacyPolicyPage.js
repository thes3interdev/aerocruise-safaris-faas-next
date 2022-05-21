import { gql } from '@apollo/client';

const GetPrivacyPolicyPage = gql`
	query GetPrivacyPolicyPage {
		page(where: { pageTitle: "Privacy Policy Page" }) {
			heroSection {
				heroImage {
					url
				}
				title
				subtitle
			}
			contentSection {
				content {
					html
				}
			}
		}
	}
`;

export default GetPrivacyPolicyPage;
