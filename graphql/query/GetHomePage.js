import { gql } from '@apollo/client';

const GetHomePage = gql`
	query GetHomePage {
		marketingPages(where: { pageTitle: "Home Page" }) {
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
			destinations {
				id
				name
				coverImage {
					url
				}
			}
			whyAerocruise {
				id
				coverImage {
					url
				}
				title
				description
			}
			guestReviews {
				id
				guestName
				destination {
					id
					name
					coverImage {
						url
					}
				}
				travelDate
				review {
					html
				}
			}
			blogPosts {
				id
				title
				coverImage {
					url
				}
				excerpt
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

export default GetHomePage;
