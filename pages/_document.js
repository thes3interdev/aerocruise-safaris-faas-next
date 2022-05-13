import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
	return (
		<Html lang="en" className="min-h-full">
			<Head />
			<body className="flex min-h-full flex-col font-ubuntu text-slate-500 antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
