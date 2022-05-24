import Link from 'next/link';
import client from '../lib/ApolloClient';
import GET_SUBSCRIPTIONS_PAGE from '../graphql/query/GetSubscriptionsPage';
import Meta from '../lib/Meta';

/** fetch data at build time */
export const getStaticProps = async () => {
	const { data } = await client.query({
		query: GET_SUBSCRIPTIONS_PAGE,
	});

	return {
		props: {
			page: data.collectionPage,
		},
		revalidate: 55,
	};
};

const Subscriptions = ({ page }) => {
	const handleChange = ({ event }) => {};
	const handleSubmit = ({ event }) => {};

	return (
		<div>
			{/** title bar start */}
			<Meta title="Subscriptions | An Authentic African Experience | Aerocruise Safaris" />
			{/** title bar end */}

			{/** hero section start */}
			<section
				className="h-[450px] w-full bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url(${page.heroSection.heroImage.url})`,
				}}
			>
				<div className="flex h-full w-full items-center justify-center bg-slate-900 bg-opacity-50">
					<div className="text-center text-slate-100">
						<h1 className="mb-2 text-2xl font-semibold uppercase lg:text-3xl">
							{page.heroSection.title}
						</h1>
						<h3 className="b-4 text-lg font-medium uppercase tracking-wider lg:text-xl">
							{page.heroSection.subtitle}
						</h3>
					</div>
				</div>
			</section>
			{/** hero section end */}

			{/** header section start */}
			<section className="mx-auto max-w-5xl px-8 pt-10">
				<div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-4xl">
					<div>
						<p className="mb-4 inline-block rounded-full bg-emerald-800 px-3 py-px text-xs font-semibold uppercase tracking-wider text-slate-100">
							{page.headerSection.label}
						</p>
					</div>
					<h2 className="mb-6 max-w-lg text-3xl font-bold leading-none tracking-tight text-sky-800 sm:text-4xl md:mx-auto">
						<span className="relative inline-block">
							<svg
								viewBox="0 0 52 24"
								fillRule="currentColor"
								className="absolute top-0 left-0 z-0 -mt-8 -ml-20 hidden w-32 text-slate-800 sm:block lg:-ml-28 lg:-mt-10 lg:w-32"
							>
								<defs>
									<pattern
										id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
										x="0"
										y="0"
										width=".135"
										height=".30"
									>
										<circle cx="1" cy="1" r=".7" />
									</pattern>
								</defs>
								<rect
									fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
									width="55"
									height="21"
								/>
							</svg>
							<span className="relative">{page.headerSection.title}</span>
						</span>
					</h2>
					<p className="text-base md:text-lg">{page.headerSection.subtitle}</p>
				</div>
			</section>
			{/** header section end */}

			{/** subscriptions form start */}
			<div className="mx-auto max-w-5xl px-8 pb-10">
				<div className="mx-auto max-w-3xl rounded-lg bg-slate-50 px-4 py-8 shadow-lg sm:px-6 lg:px-8">
					{/** data entry form start */}
					<form onSubmit={handleSubmit} className="py-6">
						<div className="flex flex-col sm:flex-row sm:gap-8">
							<div className="mb-4 flex-1">
								<label htmlFor="first_name">
									First Name<span className="font-bold text-red-600">*</span>
								</label>
								<input
									type="text"
									name="first_name"
									className="mt-1 w-full rounded-md border-2 border-gray-100 bg-gray-100 py-3 focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-2"
									placeholder="John"
									onChange={handleChange}
									required
								/>
							</div>
							<div className="mb-4 flex-1">
								<label htmlFor="last_name">Last Name</label>
								<input
									type="text"
									name="last_name"
									className="mt-1 w-full rounded-md border-2 border-gray-100 bg-gray-100 py-3 focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-2"
									placeholder="Doe"
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="flex flex-col sm:flex-row sm:gap-8">
							<div className="mb-4 flex-1">
								<label htmlFor="residency">
									Country of Residence<span className="font-bold text-red-600">*</span>
								</label>
								<select
									name="residency"
									className="mt-1 w-full rounded-md border-2 border-gray-100 bg-gray-100 py-3 focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-2"
									onChange={handleChange}
									defaultValue={'DEFAULT'}
									required
								>
									<option value="DEFAULT" disabled hidden>
										Please select
									</option>
									<option value="Afganistan">Afghanistan</option>
									<option value="Albania">Albania</option>
									<option value="Algeria">Algeria</option>
									<option value="American Samoa">American Samoa</option>
									<option value="Andorra">Andorra</option>
									<option value="Angola">Angola</option>
									<option value="Anguilla">Anguilla</option>
									<option value="Antigua &amp; Barbuda">Antigua &amp; Barbuda</option>
									<option value="Argentina">Argentina</option>
									<option value="Armenia">Armenia</option>
									<option value="Aruba">Aruba</option>
									<option value="Australia">Australia</option>
									<option value="Austria">Austria</option>
									<option value="Azerbaijan">Azerbaijan</option>
									<option value="Bahamas">Bahamas</option>
									<option value="Bahrain">Bahrain</option>
									<option value="Bangladesh">Bangladesh</option>
									<option value="Barbados">Barbados</option>
									<option value="Belarus">Belarus</option>
									<option value="Belgium">Belgium</option>
									<option value="Belize">Belize</option>
									<option value="Benin">Benin</option>
									<option value="Bermuda">Bermuda</option>
									<option value="Bhutan">Bhutan</option>
									<option value="Bolivia">Bolivia</option>
									<option value="Bonaire">Bonaire</option>
									<option value="Bosnia &amp; Herzegovina">
										Bosnia &amp; Herzegovina
									</option>
									<option value="Botswana">Botswana</option>
									<option value="Brazil">Brazil</option>
									<option value="British Indian Ocean Territories">
										British Indian Ocean Territories
									</option>
									<option value="Brunei">Brunei</option>
									<option value="Bulgaria">Bulgaria</option>
									<option value="Burkina Faso">Burkina Faso</option>
									<option value="Burundi">Burundi</option>
									<option value="Cambodia">Cambodia</option>
									<option value="Cameroon">Cameroon</option>
									<option value="Canada">Canada</option>
									<option value="Canary Islands">Canary Islands</option>
									<option value="Cape Verde">Cape Verde</option>
									<option value="Cayman Islands">Cayman Islands</option>
									<option value="Central African Republic">
										Central African Republic
									</option>
									<option value="Chad">Chad</option>
									<option value="Channel Islands">Channel Islands</option>
									<option value="Chile">Chile</option>
									<option value="China">China</option>
									<option value="Christmas Island">Christmas Island</option>
									<option value="Cocos Island">Cocos Island</option>
									<option value="Colombia">Colombia</option>
									<option value="Comoros">Comoros</option>
									<option value="Congo">Congo</option>
									<option value="Cook Islands">Cook Islands</option>
									<option value="Costa Rica">Costa Rica</option>
									<option value="Cote DIvoire">Cote DIvoire</option>
									<option value="Croatia">Croatia</option>
									<option value="Cuba">Cuba</option>
									<option value="Curaco">Curacao</option>
									<option value="Cyprus">Cyprus</option>
									<option value="Czech Republic">Czech Republic</option>
									<option value="Denmark">Denmark</option>
									<option value="Djibouti">Djibouti</option>
									<option value="Dominica">Dominica</option>
									<option value="Dominican Republic">Dominican Republic</option>
									<option value="East Timor">East Timor</option>
									<option value="Ecuador">Ecuador</option>
									<option value="Egypt">Egypt</option>
									<option value="El Salvador">El Salvador</option>
									<option value="Equatorial Guinea">Equatorial Guinea</option>
									<option value="Eritrea">Eritrea</option>
									<option value="Estonia">Estonia</option>
									<option value="Ethiopia">Ethiopia</option>
									<option value="Falkland Islands">Falkland Islands</option>
									<option value="Faroe Islands">Faroe Islands</option>
									<option value="Fiji">Fiji</option>
									<option value="Finland">Finland</option>
									<option value="France">France</option>
									<option value="French Guiana">French Guiana</option>
									<option value="French Polynesia">French Polynesia</option>
									<option value="French Southern Territories">
										French Southern Territories
									</option>
									<option value="Gabon">Gabon</option>
									<option value="Gambia">Gambia</option>
									<option value="Georgia">Georgia</option>
									<option value="Germany">Germany</option>
									<option value="Ghana">Ghana</option>
									<option value="Gibraltar">Gibraltar</option>
									<option value="Great Britain">Great Britain</option>
									<option value="Greece">Greece</option>
									<option value="Greenland">Greenland</option>
									<option value="Grenada">Grenada</option>
									<option value="Guadeloupe">Guadeloupe</option>
									<option value="Guam">Guam</option>
									<option value="Guatemala">Guatemala</option>
									<option value="Guinea">Guinea</option>
									<option value="Guyana">Guyana</option>
									<option value="Haiti">Haiti</option>
									<option value="Hawaii">Hawaii</option>
									<option value="Honduras">Honduras</option>
									<option value="Hong Kong">Hong Kong</option>
									<option value="Hungary">Hungary</option>
									<option value="Iceland">Iceland</option>
									<option value="Indonesia">Indonesia</option>
									<option value="India">India</option>
									<option value="Iran">Iran</option>
									<option value="Iraq">Iraq</option>
									<option value="Ireland">Ireland</option>
									<option value="Isle of Man">Isle of Man</option>
									<option value="Israel">Israel</option>
									<option value="Italy">Italy</option>
									<option value="Jamaica">Jamaica</option>
									<option value="Japan">Japan</option>
									<option value="Jordan">Jordan</option>
									<option value="Kazakhstan">Kazakhstan</option>
									<option value="Kenya">Kenya</option>
									<option value="Kiribati">Kiribati</option>
									<option value="Korea North">Korea North</option>
									<option value="Korea Sout">Korea South</option>
									<option value="Kuwait">Kuwait</option>
									<option value="Kyrgyzstan">Kyrgyzstan</option>
									<option value="Laos">Laos</option>
									<option value="Latvia">Latvia</option>
									<option value="Lebanon">Lebanon</option>
									<option value="Lesotho">Lesotho</option>
									<option value="Liberia">Liberia</option>
									<option value="Libya">Libya</option>
									<option value="Liechtenstein">Liechtenstein</option>
									<option value="Lithuania">Lithuania</option>
									<option value="Luxembourg">Luxembourg</option>
									<option value="Macau">Macau</option>
									<option value="Macedonia">Macedonia</option>
									<option value="Madagascar">Madagascar</option>
									<option value="Malaysia">Malaysia</option>
									<option value="Malawi">Malawi</option>
									<option value="Maldives">Maldives</option>
									<option value="Mali">Mali</option>
									<option value="Malta">Malta</option>
									<option value="Marshall Islands">Marshall Islands</option>
									<option value="Martinique">Martinique</option>
									<option value="Mauritania">Mauritania</option>
									<option value="Mauritius">Mauritius</option>
									<option value="Mayotte">Mayotte</option>
									<option value="Mexico">Mexico</option>
									<option value="Midway Islands">Midway Islands</option>
									<option value="Moldova">Moldova</option>
									<option value="Monaco">Monaco</option>
									<option value="Mongolia">Mongolia</option>
									<option value="Montserrat">Montserrat</option>
									<option value="Morocco">Morocco</option>
									<option value="Mozambique">Mozambique</option>
									<option value="Myanmar">Myanmar</option>
									<option value="Nambia">Nambia</option>
									<option value="Nauru">Nauru</option>
									<option value="Nepal">Nepal</option>
									<option value="Netherland Antilles">Netherland Antilles</option>
									<option value="Netherlands">Netherlands (Holland, Europe)</option>
									<option value="Nevis">Nevis</option>
									<option value="New Caledonia">New Caledonia</option>
									<option value="New Zealand">New Zealand</option>
									<option value="Nicaragua">Nicaragua</option>
									<option value="Niger">Niger</option>
									<option value="Nigeria">Nigeria</option>
									<option value="Niue">Niue</option>
									<option value="Norfolk Island">Norfolk Island</option>
									<option value="Norway">Norway</option>
									<option value="Oman">Oman</option>
									<option value="Pakistan">Pakistan</option>
									<option value="Palau Island">Palau Island</option>
									<option value="Palestine">Palestine</option>
									<option value="Panama">Panama</option>
									<option value="Papua New Guinea">Papua New Guinea</option>
									<option value="Paraguay">Paraguay</option>
									<option value="Peru">Peru</option>
									<option value="Phillipines">Philippines</option>
									<option value="Pitcairn Island">Pitcairn Island</option>
									<option value="Poland">Poland</option>
									<option value="Portugal">Portugal</option>
									<option value="Puerto Rico">Puerto Rico</option>
									<option value="Qatar">Qatar</option>
									<option value="Republic of Montenegro">Republic of Montenegro</option>
									<option value="Republic of Serbia">Republic of Serbia</option>
									<option value="Reunion">Reunion</option>
									<option value="Romania">Romania</option>
									<option value="Russia">Russia</option>
									<option value="Rwanda">Rwanda</option>
									<option value="St Barthelemy">St Barthelemy</option>
									<option value="St Eustatius">St Eustatius</option>
									<option value="St Helena">St Helena</option>
									<option value="St Kitts-Nevis">St Kitts-Nevis</option>
									<option value="St Lucia">St Lucia</option>
									<option value="St Maarten">St Maarten</option>
									<option value="St Pierre &amp; Miquelon">
										St Pierre &amp; Miquelon
									</option>
									<option value="St Vincent &amp; Grenadines">
										St Vincent &amp; Grenadines
									</option>
									<option value="Saipan">Saipan</option>
									<option value="Samoa">Samoa</option>
									<option value="Samoa American">Samoa American</option>
									<option value="San Marino">San Marino</option>
									<option value="Sao Tome &amp; Principe">Sao Tome &amp; Principe</option>
									<option value="Saudi Arabia">Saudi Arabia</option>
									<option value="Senegal">Senegal</option>
									<option value="Seychelles">Seychelles</option>
									<option value="Sierra Leone">Sierra Leone</option>
									<option value="Singapore">Singapore</option>
									<option value="Slovakia">Slovakia</option>
									<option value="Slovenia">Slovenia</option>
									<option value="Solomon Islands">Solomon Islands</option>
									<option value="Somalia">Somalia</option>
									<option value="South Africa">South Africa</option>
									<option value="Spain">Spain</option>
									<option value="Sri Lanka">Sri Lanka</option>
									<option value="Sudan">Sudan</option>
									<option value="Suriname">Suriname</option>
									<option value="Swaziland">Swaziland</option>
									<option value="Sweden">Sweden</option>
									<option value="Switzerland">Switzerland</option>
									<option value="Syria">Syria</option>
									<option value="Tahiti">Tahiti</option>
									<option value="Taiwan">Taiwan</option>
									<option value="Tajikistan">Tajikistan</option>
									<option value="Tanzania">Tanzania</option>
									<option value="Thailand">Thailand</option>
									<option value="Togo">Togo</option>
									<option value="Tokelau">Tokelau</option>
									<option value="Tonga">Tonga</option>
									<option value="Trinidad &amp; Tobago">Trinidad &amp; Tobago</option>
									<option value="Tunisia">Tunisia</option>
									<option value="Turkey">Turkey</option>
									<option value="Turkmenistan">Turkmenistan</option>
									<option value="Turks &amp; Caicos Islands">
										Turks &amp; Caicos Islands
									</option>
									<option value="Tuvalu">Tuvalu</option>
									<option value="Uganda">Uganda</option>
									<option value="United Kingdom">United Kingdom</option>
									<option value="Ukraine">Ukraine</option>
									<option value="United Arab Erimates">United Arab Emirates</option>
									<option value="United States of America">
										United States of America
									</option>
									<option value="Uraguay">Uruguay</option>
									<option value="Uzbekistan">Uzbekistan</option>
									<option value="Vanuatu">Vanuatu</option>
									<option value="Vatican City State">Vatican City State</option>
									<option value="Venezuela">Venezuela</option>
									<option value="Vietnam">Vietnam</option>
									<option value="Virgin Islands (British)">
										Virgin Islands (British)
									</option>
									<option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
									<option value="Wake Island">Wake Island</option>
									<option value="Wallis &amp; Futana Islands">
										Wallis &amp; Futana Islands
									</option>
									<option value="Yemen">Yemen</option>
									<option value="Zaire">Zaire</option>
									<option value="Zambia">Zambia</option>
									<option value="Zimbabwe">Zimbabwe</option>
								</select>
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
						<button
							type="submit"
							className="mt-2 mb-2 inline-flex w-full items-center justify-center rounded-lg bg-emerald-700 py-3 px-5 font-medium uppercase text-white hover:bg-emerald-500"
						>
							Subscribe
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

			{/** call to action section start */}
			<section className="mx-auto max-w-7xl">
				<div className="m-8 flex flex-col rounded-lg bg-slate-50 shadow-lg lg:flex-row">
					<div className="order-2 flex h-64 w-full items-center justify-center px-5 py-8 lg:order-1 lg:w-1/2">
						<div className="max-w-xl p-4">
							<h3 className="text-center text-2xl font-medium tracking-wide text-slate-800">
								{page.callToAction.prompt}
							</h3>
							<div className="mt-6 flex flex-col space-y-3 lg:flex-row lg:space-y-0">
								<Link href={page.callToAction.link.href}>
									<a className="inline-flex w-full items-center justify-center rounded-lg bg-emerald-700 py-3 px-5 text-lg font-medium uppercase text-white hover:bg-emerald-500">
										{page.callToAction.link.label}
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="order-1 h-64 w-full lg:order-2 lg:w-1/2">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							className="h-full w-full rounded-t-lg object-cover object-center lg:rounded-t-none lg:rounded-tr-lg lg:rounded-br-lg"
							src={page.callToAction.coverImage.url}
							alt="Call To Action Featured Image"
						/>
					</div>
				</div>
			</section>
			{/** call to action section end */}
		</div>
	);
};

export default Subscriptions;
