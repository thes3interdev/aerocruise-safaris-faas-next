import { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useMutation } from '@apollo/client';
import { Dialog, Transition } from '@headlessui/react';
import CREATE_MESSAGE from '../graphql/mutation/CreateMessage';

const MessageForm = () => {
	const router = useRouter();
	const [createMessage] = useMutation(CREATE_MESSAGE);
	const [message, setMessage] = useState({});
	let [isOpen, setIsOpen] = useState(false);

	const handleChange = (e) => {
		setMessage({ ...message, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		createMessage({ variables: { ...message } });
		openModal();
	};

	const closeModal = () => {
		setIsOpen(false);
		router.push('/experiences');
	};

	const openModal = () => {
		setIsOpen(true);
	};

	return (
		<div>
			{/** modal start */}
			<>
				<Transition appear show={isOpen} as={Fragment}>
					<Dialog as="div" className="relative z-10" onClose={closeModal}>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div className="fixed inset-0 bg-slate-900 bg-opacity-50" />
						</Transition.Child>

						<div className="fixed inset-0 overflow-y-auto">
							<div className="flex min-h-full items-center justify-center p-4 text-center">
								<Transition.Child
									as={Fragment}
									enter="ease-out duration-300"
									enterFrom="opacity-0 scale-95"
									enterTo="opacity-100 scale-100"
									leave="ease-in duration-200"
									leaveFrom="opacity-100 scale-100"
									leaveTo="opacity-0 scale-95"
								>
									<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-slate-50 p-6 text-left align-middle shadow-xl transition-all">
										<Dialog.Title
											as="h3"
											className="text-xl font-semibold leading-6 text-sky-800"
										>
											Message Sent
										</Dialog.Title>
										<div className="mt-2">
											<p className="tracking-wide">
												Thank you very much for your message. Your message has been sent
												to our Team of Safari Specialists, where one of them will get back
												to you as soon as possible.
											</p>
										</div>

										<div className="mt-4">
											<button
												type="button"
												className="inline-flex justify-center rounded-lg border border-transparent bg-emerald-800 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
												onClick={closeModal}
											>
												Ok, Got It!
											</button>
										</div>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</div>
					</Dialog>
				</Transition>
			</>
			{/** modal end */}

			{/** subscriptions form start */}
			<div className="mx-auto max-w-5xl px-8 pb-10">
				<div className="mx-auto max-w-3xl rounded-lg bg-slate-50 px-4 py-8 shadow-lg sm:px-6 lg:px-8">
					{/** data entry form start */}
					<form onSubmit={handleSubmit} className="py-6">
						<div className="flex flex-col sm:flex-row sm:gap-8">
							<div className="mb-4 flex-1">
								<label htmlFor="name">
									Name<span className="font-bold text-red-600">*</span>
								</label>
								<input
									type="text"
									name="name"
									className="mt-1 w-full rounded-md border-2 border-gray-100 bg-gray-100 py-3 focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-2"
									placeholder="John"
									onChange={handleChange}
									required
								/>
							</div>
							<div className="mb-4 flex-1">
								<label htmlFor="email">
									Email<span className="font-bold text-red-600">*</span>
								</label>
								<input
									type="email"
									name="email"
									className="mt-1 w-full rounded-md border-2 border-gray-100 bg-gray-100 py-3 focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-2"
									placeholder="john.doe@email.com"
									onChange={handleChange}
									required
								/>
							</div>
						</div>
						<div className="flex flex-col sm:flex-row sm:gap-8">
							<div className="mb-4 flex-1">
								<label htmlFor="subject">Subject</label>
								<input
									type="text"
									name="subject"
									className="mt-1 w-full rounded-md border-2 border-gray-100 bg-gray-100 py-3 focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-2"
									placeholder="Subject"
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="flex flex-col sm:flex-row sm:gap-8">
							<div className="mb-5 flex-1">
								<label htmlFor="message">
									Message<span className="font-bold text-red-600">*</span>
								</label>
								<textarea
									className="mt-1 w-full rounded-md border-2 border-gray-100 bg-gray-100 py-3 focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-2"
									name="message"
									cols="30"
									rows="5"
									placeholder="Your message..."
									onChange={handleChange}
									required
								></textarea>
							</div>
						</div>
						<button
							type="submit"
							className="mt-2 mb-2 inline-flex w-full items-center justify-center rounded-lg bg-emerald-700 py-3 px-5 font-medium uppercase text-white hover:bg-emerald-500"
						>
							Send
						</button>
						<p className="m-2 text-center text-xs">
							Your personal details are protected as per the terms of the
							<Link href="/privacy-policy">
								<a className="text-sky-700 underline">
									<span> privacy policy</span>
								</a>
							</Link>
						</p>
					</form>
					{/** data entry form end */}
				</div>
			</div>
			{/** subscriptions form end */}
		</div>
	);
};

export default MessageForm;
