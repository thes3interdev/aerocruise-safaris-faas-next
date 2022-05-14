import Meta from '../lib/Meta';
import NavigationHeader from '../components/NavigationHeader';
import NavigationFooter from '../components/NavigationFooter';

const Layout = ({ children }) => {
	return (
		<div>
			<Meta />
			<NavigationHeader />
			{children}
			<NavigationFooter />
		</div>
	);
};

export default Layout;
