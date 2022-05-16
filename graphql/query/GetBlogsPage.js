import { gql } from '@apollo/client';

const GetBlogsPage = gql`
	query GetBlogsPage {
		blog {
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
								featured_image {
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

export default GetBlogsPage;
