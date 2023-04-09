import React from 'react';

const MyResume = () => {
	return (
		<section id="section_resume">
			<div className="bg-dark h-[80vh] pt-28 max-md:px-7 max-lg:px-16 max-lg:pt-24 px-48 ">
				<div className="relative overflow-hidden text-center section-heading pb-14">
					<h2 className="relative z-10 mb-2 text-4xl font-bold uppercase font-radio">
						MY RESUME
					</h2>
					<span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20">
						<span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary"></span>
					</span>
					<span className="absolute z-0 font-bold uppercase transform -translate-x-1/2 pointer-events-none font-radio left-1/2 -top-2 ltr-text text-9xl text-heading opacity-5 will-change-transform">
						RESUME
					</span>
				</div>
				<div className="text-lg font-medium text-left font-radio">
					{/* Inexture Full Time */}
					<div className="opacity-100 timeline-wrap transform-none">
						<div className="relative items-start block border-white rounded-full timeline border-opacity-20 first:mt-0 md:flex">
							<span className="timeline-year absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-primary bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0">
								2022 - Present
							</span>
							<div className="relative pt-16 pl-12 border-l-4 border-white timeline-right border-opacity-20 md:pt-6">
								<span className="absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20">
									<span className="absolute left-0 z-10 inline-block w-6 h-6 transform -translate-x-1/2 bg-opacity-100 border-4 border-white rounded-full top-6 border-opacity-20 bg-gray"></span>
									<span className="absolute left-0 right-full top-6  mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2 z-[9]"></span>
								</span>
								<h5 className="mb-0 text-primary">Associate Software Engineer</h5>
								<p className="mb-2 text-heading">Abcd Infotech</p>
								<div className="flex">
									<div>
										<strong>Skills:</strong>
									</div>
									<div className="pl-3">
										React.js · Redux.js · Redux Thunk · Git · Gitlab · GitHub ·
										Material-UI · Tailwind CSS · Styled-components · Bootstrap ·
										React Native · Vue · Vuetify · Vuex · Vue.js
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Inexture Trainning */}
					<div className="opacity-100 timeline-wrap transform-none">
						<div className="relative items-start block border-white rounded-full timeline border-opacity-20 first:mt-0 md:flex">
							<span className="timeline-year absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-primary bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0">
								2022 - 2022
							</span>
							<div className="relative pt-16 pl-12 border-l-4 border-white timeline-right border-opacity-20 md:pt-6">
								<span className="absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20">
									<span className="absolute left-0 z-10 inline-block w-6 h-6 transform -translate-x-1/2 bg-opacity-100 border-4 border-white rounded-full top-6 border-opacity-20 bg-gray"></span>
									<span className="absolute left-0 right-full top-6  mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2 z-[9]"></span>
								</span>
								<h5 className="mb-0 text-primary">React JS Trainee Intern</h5>
								<p className="mb-2 text-heading">Abcd Infotech</p>
								<div className="flex">
									<div>
										<strong>Skills:</strong>
									</div>
									<div className="pl-3">
										React.js · Redux · JavaScript · Bootstrap · Node.js · Vue.js
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* BITNET Infotech */}
					<div className="opacity-100 timeline-wrap transform-none">
						<div className="relative items-start block border-white rounded-full timeline border-opacity-20 first:mt-0 md:flex">
							<span className="timeline-year absolute top-0 left-12 mt-7 mr-12 min-w-[115px] rounded-full bg-primary bg-opacity-10 p-1 text-center text-sm leading-none md:relative md:left-0">
								2021 - 2021
							</span>
							<div className="relative pt-16 pl-12 border-l-4 border-white timeline-right border-opacity-20 md:pt-6">
								<span className="absolute -left-0.5 top-0 mt-1 h-full w-0 rounded-full bg-white bg-opacity-20">
									<span className="absolute left-0 z-10 inline-block w-6 h-6 transform -translate-x-1/2 bg-opacity-100 border-4 border-white rounded-full top-6 border-opacity-20 bg-gray"></span>
									<span className="absolute left-0 right-full top-6  mt-2.5 h-1 w-8 translate-x-0 transform rounded-full bg-white bg-opacity-20 md:left-1/2 md:w-20 md:-translate-x-1/2 z-[9]"></span>
								</span>
								<h5 className="mb-0 text-primary">React Native Trainee Intern</h5>
								<p className="mb-2 text-heading">Bitlab Infotech.</p>
								<div className="flex">
									<div>
										<strong>Skills:</strong>
									</div>
									<div className="pl-3">React Native · Bootstrap</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MyResume;
