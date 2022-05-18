import { gql } from '@apollo/client';

const GetBlogPost = gql`
	query GetBlogPost($slug: String!) {
		posts(filters: { slug: { eq: $slug } }) {
			data {
				attributes {
					cover_image {
						data {
							attributes {
								url
							}
						}
					}
					title
					slug
					excerpt
					content
					author {
						data {
							attributes {
								photo {
									data {
										attributes {
											url
										}
									}
								}
								name
								title
							}
						}
					}
					action {
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
					publishedAt
				}
			}
		}
	}
`;

export default GetBlogPost;
