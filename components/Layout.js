import Meta from '../lib/Meta';
import NavigationHeader from '../components/NavigationHeader';
import NavigationFooter from '../components/NavigationFooter';

const Layout = ({ children }) => {
	return (
		<>
			<Meta />
			<NavigationHeader />
			<div className="mt-[79px]">{children}</div>
			<NavigationFooter />
		</>
	);
};

export default Layout;
