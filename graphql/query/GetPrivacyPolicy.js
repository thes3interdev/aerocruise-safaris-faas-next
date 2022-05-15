import { gql } from '@apollo/client';

const GetPrivacyPolicy = gql`
	query GetPrivacyPolicy {
		privacyPolicy {
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

export default GetPrivacyPolicy;
