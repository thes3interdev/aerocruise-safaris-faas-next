import Link from 'next/link';

const ActionButtonMobile = ({ linkDestination, linkText }) => {
	return (
		<Link href={linkDestination}>
			<a className="inline-flex w-full items-center justify-center rounded-lg bg-emerald-700 py-3 px-5 font-medium uppercase text-white hover:bg-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500">
				{linkText}
			</a>
		</Link>
	);
};

export default ActionButtonMobile;
