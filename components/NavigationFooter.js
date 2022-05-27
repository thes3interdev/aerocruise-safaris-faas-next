import Link from 'next/link';

const NavigationFooter = () => {
	/** declare variables */
	const contactInformation = [
		{ name: 'Primary Number :', contact: ' +254 (0)733 411762' },
		{ name: 'Alternate Number :', contact: ' +254 (0)20 6009985' },
		{ name: 'Mobile Number :', contact: ' +254 (0)735 479936' },
		{ name: 'Email :', contact: ' safaris@aerocruise-safaris.co.ke' },
		{ name: 'Office :', contact: ' Building 49, Wilson Airport, Nairobi' },
	];
	const informationLinks = [
		{ name: 'Blogs', linkDestination: '/blogs' },
		{ name: 'About', linkDestination: '/about' },
	];
	const discoverLinks = [
		{ name: 'Destinations', linkDestination: '/destinations' },
		{ name: 'Experiences', linkDestination: '/experiences' },
		{ name: 'Camps & Lodges', linkDestination: '/properties' },
	];
	const actionLinks = [
		{ name: 'Booking Request', linkDestination: '/booking-request' },
		{ name: 'Subscribe', linkDestination: '/subscriptions' },
	];
	const legalLinks = [
		{ name: 'Privacy Policy', linkDestination: '/privacy-policy' },
		{ name: 'Trading Terms', linkDestination: '/trading-terms' },
	];
	const currentYear = new Date().getFullYear();

	return (
		<div className="mt-auto bg-slate-800 py-10">
			<div className="mx-auto max-w-7xl px-4 pt-10">
				<div className="row-gap-10 mb-8 grid gap-16 xl:grid-cols-6">
					{/** contact section start */}
					<div className="md:max-w-md lg:col-span-2">
						<Link href="/" className="inline-flex items-center">
							<a className="text-xl font-semibold uppercase tracking-wide text-slate-100">
								Aerocruise Safaris
							</a>
						</Link>
						<div className="mt-4 space-y-2 lg:max-w-sm">
							<ul className="text-sm tracking-wide text-slate-100">
								{contactInformation.map((contact) => (
									<li key={contact.name} className="py-1">
										<span className="font-semibold">{contact.name}</span>
										{contact.contact}
									</li>
								))}
							</ul>
						</div>
					</div>
					{/** contact section end */}

					<div className="row-gap-8 grid grid-cols-2 gap-5 md:grid-cols-4 lg:col-span-4">
						{/** information section end */}
						<div>
							<p className="font-semibold uppercase tracking-wide text-slate-100">
								Information
							</p>
							<ul className="mt-4 space-y-2">
								{informationLinks.map((link) => (
									<li key={link.name}>
										<Link href={link.linkDestination}>
											<a className="font-medium tracking-wide text-slate-100 hover:underline">
												{link.name}
											</a>
										</Link>
									</li>
								))}
							</ul>
						</div>
						{/** information section end */}

						{/** discover section start */}
						<div>
							<p className="font-semibold uppercase tracking-wide text-slate-100">
								Discover
							</p>
							<ul className="mt-4 space-y-2">
								{discoverLinks.map((link) => (
									<li key={link.name}>
										<Link href={link.linkDestination}>
											<a className="font-medium tracking-wide text-slate-100 hover:underline">
												{link.name}
											</a>
										</Link>
									</li>
								))}
							</ul>
						</div>
						{/** discover section end */}

						{/** action section start */}
						<div>
							<p className="font-semibold uppercase tracking-wide text-slate-100">
								Action
							</p>
							<ul className="mt-4 space-y-2">
								{actionLinks.map((link) => (
									<li key={link.name}>
										<Link href={link.linkDestination}>
											<a className="font-medium tracking-wide text-slate-100 hover:underline">
												{link.name}
											</a>
										</Link>
									</li>
								))}
							</ul>
						</div>
						{/** action section end */}

						{/** legal section start */}
						<div>
							<p className="font-semibold uppercase tracking-wide text-slate-100">
								Legal
							</p>
							<ul className="mt-4 space-y-2">
								{legalLinks.map((link) => (
									<li key={link.name}>
										<Link href={link.linkDestination}>
											<a className="font-medium tracking-wide text-slate-100 hover:underline">
												{link.name}
											</a>
										</Link>
									</li>
								))}
							</ul>
						</div>
						{/** legal section end */}
					</div>
				</div>

				{/** bottom section start */}
				<div className="flex flex-col items-center justify-between border-t pt-5 pb-10 sm:flex-row">
					<p className="text-sm text-slate-100">
						© Copyright {currentYear} Aerocruise Safaris LLC.
					</p>
					<div className="mt-4 flex items-center space-x-4 sm:mt-0">
						<a
							href="https://www.facebook.com/aerocruisesafaris/"
							target="_blank"
							rel="noreferrer"
							className="hover:text-deep-purple-accent-400 text-slate-100 transition-colors duration-300"
						>
							<svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
								<path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
							</svg>
						</a>
						<a
							href="https://twitter.com/aerocruise"
							target="_blank"
							rel="noreferrer"
							className="hover:text-deep-purple-accent-400 text-slate-100 transition-colors duration-300"
						>
							<svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
								<path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
							</svg>
						</a>
						<a
							href="https://www.instagram.com/aerocruise_safaris"
							target="_blank"
							rel="noreferrer"
							className="hover:text-deep-purple-accent-400 text-slate-100 transition-colors duration-300"
						>
							<svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
								<circle cx="15" cy="15" r="4" />
								<path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
							</svg>
						</a>
					</div>
				</div>
				{/** bottom section end */}
			</div>
		</div>
	);
};

export default NavigationFooter;
