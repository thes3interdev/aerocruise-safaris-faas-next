import Link from 'next/link';

const ActionButton = ({ linkDestination, linkText }) => {
	return (
		<Link href={linkDestination}>
			<a className="rounded-lg bg-emerald-700 px-5 py-3 text-center text-sm font-medium uppercase text-white hover:bg-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500">
				{linkText}
			</a>
		</Link>
	);
};

export default ActionButton;
