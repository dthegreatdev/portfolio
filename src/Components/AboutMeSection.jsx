import React from 'react';

const AboutMeSection = () => {
	return (
		<section id="section_about">
			<div className="bg-dark h-[80vh] pt-28 px-48 max-md:px-7 max-lg:pt-24 max-lg:px-16 pb-16">
				<div className="relative overflow-hidden text-center section-heading pb-14">
					<h2 className="relative z-10 mb-2 text-4xl font-bold uppercase font-radio">
						About Me
					</h2>
					<span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20">
						<span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary"></span>
					</span>
					<span className="absolute z-0 font-bold uppercase transform -translate-x-1/2 pointer-events-none font-radio left-1/2 -top-2 ltr-text text-9xl text-heading opacity-5 will-change-transform">
						About
					</span>
				</div>
				<div className="grid grid-cols-2 mt-5 text-left max-lg:grid-cols-1 gap-9">
					<div className="overflow-hidden rounded-lg h-[437px] w-[600px] max-lg:flex max-lg:justify-center max-lg:items-center max-lg:w-full max-lg:p-10 ">
						<div className="box ">
							<img
								src="https://images.ctfassets.net/19dvw6heztyg/1Kh1hVqbZSsSL4HM5TrJX3/6e19c050bd007e99f915e5034b87ebb6/seo-earn-more-as-developer?w=1200&h=600&fit=fill&q=75&fm=jpg"
								alt=""
								className="flex justify-center "
							/>
						</div>
					</div>
					<div className="pl-10">
						<div>
							<p className="text-2xl font-bold font-radio">
								Hi, I am <span className="text-primary">Dev </span>
							</p>
						</div>
						<div className="mt-5">
							<ul className="pl-0 list-outside styledlist">
								<li className="text-lg">
									<strong className="inline-block min-w-[120px] font-medium">
										First Name{' '}
									</strong>
									: Dev
								</li>
								<li className="text-lg">
									<strong className="inline-block min-w-[120px] font-medium">
										Age{' '}
									</strong>
									: 23 years
								</li>
								<li className="text-lg">
									<strong className="inline-block min-w-[120px] font-medium">
										Nationality{' '}
									</strong>
									: Indian
								</li>
								<li className="text-lg">
									<strong className="inline-block min-w-[120px] font-medium">
										Languages{' '}
									</strong>
									: English, Hindi, Gujarati
								</li>
								<li className="text-lg">
									<strong className="inline-block min-w-[120px] font-medium">
										Address{' '}
									</strong>
									: India
								</li>
								{/* <li className="text-lg">
								<strong className="inline-block min-w-[120px] font-medium">
									Freelance{' '}
								</strong>
								: Available
							</li> */}
							</ul>
							<div className="my-8">
								<button className="btn">
									<span className="z-10 text-inherit">DOWNLOAD RESUME</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMeSection;
