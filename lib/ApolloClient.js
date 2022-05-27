import { ApolloClient, InMemoryCache } from '@apollo/client';

/** configure the apollo client */
const client = new ApolloClient({
	uri: 'https://api-eu-central-1.graphcms.com/v2/cl3cmhxnq0nij01xp6d6ifvhg/master',
	cache: new InMemoryCache(),
});

export default client;
