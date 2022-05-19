import { gql } from '@apollo/client';

const GetExperiencesPage = gql`
	query GetExperiencesPage {
		experiencesPage {
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
						label
						title
						subtitle
					}
					cta {
						data {
							attributes {
								prompt
								cover_image {
									data {
										attributes {
											url
										}
									}
								}
								link {
									label
									href
								}
							}
						}
					}
				}
			}
		}
	}
`;

export default GetExperiencesPage;
