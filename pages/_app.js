import { ApolloProvider } from '@apollo/client';
import client from '../lib/ApolloClient';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />;
		</ApolloProvider>
	);
};

export default MyApp;
