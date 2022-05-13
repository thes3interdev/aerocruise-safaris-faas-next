import Head from 'next/head';

const Meta = ({ title }) => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="description"
					content="Aerocruise Safaris is an experiential travel company that tailor-makes exclusive safaris and tours in Africa to give you an authentic African tour experience."
				/>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<title>{title}</title>
			</Head>
		</>
	);
};

Meta.defaultProps = {
	title: 'An Authentic African Experience | Aerocruise Safaris',
};

export default Meta;
