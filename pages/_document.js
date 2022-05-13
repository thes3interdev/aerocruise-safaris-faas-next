import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
	return (
		<Html lang="en">
			<Head />
			<body className="flex h-screen flex-col bg-slate-50 font-ubuntu text-slate-500 antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
