import Link from 'next/link';

const CallToActionCard = ({ prompt, image, label, href }) => {
	return (
		<section className="mx-auto max-w-7xl">
			<div className="m-8 flex flex-col rounded-lg bg-slate-50 shadow-lg lg:flex-row">
				<div className="order-2 flex h-64 w-full items-center justify-center px-5 py-8 lg:order-1 lg:w-1/2">
					<div className="max-w-xl p-4">
						<h3 className="text-center text-2xl font-medium tracking-wide text-slate-800">
							{prompt}
						</h3>
						<div className="mt-6 flex flex-col space-y-3 lg:flex-row lg:space-y-0">
							<Link href={href}>
								<a className="inline-flex w-full items-center justify-center rounded-lg bg-emerald-700 py-3 px-5 text-lg font-medium uppercase text-white hover:bg-emerald-500">
									{label}
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="order-1 h-64 w-full lg:order-2 lg:w-1/2">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						className="h-full w-full rounded-t-lg object-cover object-center lg:rounded-t-none lg:rounded-tr-lg lg:rounded-br-lg"
						src={image}
						alt="Call To Action Featured Image"
					/>
				</div>
			</div>
		</section>
	);
};

export default CallToActionCard;
