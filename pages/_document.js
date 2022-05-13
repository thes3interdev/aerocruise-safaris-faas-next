import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head />
			<body className="flex h-screen flex-col bg-slate-50 font-ubuntu text-slate-500 antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
