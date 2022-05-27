import { gql } from '@apollo/client';

const GetTradingTermsPage = gql`
	query GetTradingTermsPage {
		page(where: { pageTitle: "Trading Terms Page" }) {
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

export default GetTradingTermsPage;
