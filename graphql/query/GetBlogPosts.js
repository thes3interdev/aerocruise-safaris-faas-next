import { gql } from '@apollo/client';

const GetBlogPosts = gql`
	query GetBlogPosts {
		posts {
			data {
				attributes {
					title
					slug
					excerpt
					cover_image {
						data {
							attributes {
								url
							}
						}
					}
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
							}
						}
					}
					publishedAt
				}
			}
		}
	}
`;

export default GetBlogPosts;
