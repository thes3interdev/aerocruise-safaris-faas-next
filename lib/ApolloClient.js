import { ApolloClient, InMemoryCache } from '@apollo/client';

/** configure the apollo client */
const client = new ApolloClient({
	uri:
		process.env.NODE_ENV === 'production'
			? 'https://backend.aerocruise-safaris.co.ke/graphql'
			: 'http://localhost:1337/graphql',
	cache: new InMemoryCache(),
});

export default client;
