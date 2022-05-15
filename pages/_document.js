import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
	return (
		<Html lang="en">
			<Head />
			<body className="flex h-screen flex-col font-poppins text-slate-500 antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
