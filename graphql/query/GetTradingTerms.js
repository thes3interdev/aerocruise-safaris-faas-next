import { gql } from '@apollo/client';

const GetTradingTerms = gql`
	query GetTradingTerms {
		tradingTerm {
			data {
				attributes {
					hero {
						hero_image {
							data {
								attributes {
									url
								}
							}
						}
						header {
							title
							subtitle
						}
					}
					content {
						content
					}
				}
			}
		}
	}
`;

export default GetTradingTerms;
