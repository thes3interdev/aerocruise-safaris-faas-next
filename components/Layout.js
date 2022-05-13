import Meta from '../lib/Meta';
import NavigationHeader from '../components/NavigationHeader';
import NavigationFooter from '../components/NavigationFooter';

const Layout = ({ children }) => {
	return (
		<>
			<Meta />
			<NavigationHeader />
			{children}
			<NavigationFooter />
		</>
	);
};

export default Layout;
