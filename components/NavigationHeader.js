import { useState } from 'react';
import Link from 'next/link';
import ActionButton from './ActionButton';
import ActionButtonMobile from './ActionButtonMobile';

const NavigationHeader = () => {
	/** declare variables */
	const menuLinks = [
		{ name: 'Destination', linkDestination: '/destination' },
		{ name: 'Experiences', linkDestination: '/experiences' },
		{ name: 'Camps & Lodges', linkDestination: '/properties' },
		{ name: 'Blogs', linkDestination: '/blogs' },
		{ name: 'About', linkDestination: '/about' },
	];
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const handleMenuClose = () => setIsMenuOpen(isMenuOpen);

	return (
		<nav className="fixed inset-x-0 top-0 z-30 bg-sky-800">
			<div className="mx-auto max-w-7xl px-4 py-5">
				<div className="relative flex items-center justify-between">
					{/** menu start */}
					<Link href="/">
						<a className="ml-2 text-xl font-semibold uppercase tracking-wide text-slate-100">
							Aerocruise Safaris
						</a>
					</Link>

					<ul className="hidden items-center space-x-8 xl:flex">
						{menuLinks.map((link) => (
							<li key={link.name}>
								<Link href={link.linkDestination}>
									<a className="font-medium tracking-wide text-slate-100">{link.name}</a>
								</Link>
							</li>
						))}

						{/** booking request action button start */}
						<ActionButton linkDestination="/booking-request" linkText="Booking Request" />
						{/** booking request action button end */}
					</ul>
					{/** menu end */}

					{/** mobile menu start */}
					<div className="xl:hidden">
						<button
							onClick={() => setIsMenuOpen(true)}
							className="focus:shadow-outline mr-1 rounded-lg p-2 transition duration-200 focus:outline-none"
						>
							<svg className="w-5 text-slate-100" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
								/>
								<path
									fill="currentColor"
									d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
								/>
								<path
									fill="currentColor"
									d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
								/>
							</svg>
						</button>

						{isMenuOpen && (
							<div className="absolute top-0 left-0 w-full">
								<div className="rounded-lg border bg-slate-50 p-5 shadow-md">
									<div className="mb-4 flex items-center justify-between">
										<>
											<Link href="/" className="inline-flex items-center">
												<a className="text-xl font-bold uppercase tracking-wide">
													Aerocruise Safaris
												</a>
											</Link>
										</>

										<>
											<button onClick={() => setIsMenuOpen(false)}>
												<svg className="w-5" viewBox="0 0 24 24">
													<path
														fill="currentColor"
														d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
													/>
												</svg>
											</button>
										</>
									</div>

									<nav>
										<ul className="space-y-4">
											{menuLinks.map((link) => (
												<li key={link.name}>
													<Link href={link.linkDestination}>
														<a
															onClick={handleMenuClose}
															className="text-lg font-semibold tracking-wider"
														>
															{link.name}
														</a>
													</Link>
												</li>
											))}

											{/** booking request mobile action button start */}
											<ActionButtonMobile
												linkDestination="/booking-request"
												linkText="Booking Request"
											/>
											{/** booking request mobile action button end */}
										</ul>
									</nav>
								</div>
							</div>
						)}
					</div>
					{/** mobile menu end */}
				</div>
			</div>
		</nav>
	);
};

export default NavigationHeader;
