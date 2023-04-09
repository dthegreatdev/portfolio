import React from 'react';
import CirculerProgress from './CirculerProgress';
import LinerProgress from './LinerProgress';

const SkillSection = () => {
	return (
		<section id="section_skill">
			<div className="bg-dark h-[100vh] pt-28 max-md:px-7 max-lg:px-16 max-lg:pt-14 max-lg:p-10 px-48 ">
				<div className="relative overflow-hidden text-center section-heading pb-14">
					<h2 className="relative z-10 mb-2 text-4xl font-bold uppercase font-radio">
						MY SKILLS
					</h2>
					<span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20">
						<span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary"></span>
					</span>
					<span className="absolute z-0 font-bold uppercase transform -translate-x-1/2 pointer-events-none font-radio left-1/2 -top-2 ltr-text text-9xl text-heading opacity-5 will-change-transform">
						SKILLS
					</span>
				</div>
				<div>
					<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
						<div className=" bg-[#162033] p-10 mx-3 rounded-xl hover:-translate-y-2 duration-500  w-full border border-white border-opacity-[0.1]">
							<CirculerProgress size={0.65} />
							<p className="text-lg font-medium font-radio">UI/UX Design</p>
						</div>
						<div className=" bg-[#162033] p-10 mx-3 rounded-xl hover:-translate-y-2 duration-500  w-full border border-white border-opacity-[0.1]">
							<CirculerProgress size={0.85} />
							<p className="text-lg font-medium font-radio">Front-end Development</p>
						</div>
						<div className=" bg-[#162033] p-10 mx-3 rounded-xl hover:-translate-y-2 duration-500  w-full border border-white border-opacity-[0.1]">
							<CirculerProgress size={0.6} />
							<p className="text-lg font-medium font-radio">Back-end Development</p>
						</div>
						<div className=" bg-[#162033] p-10 mx-3 rounded-xl hover:-translate-y-2 duration-500  w-full border border-white border-opacity-[0.1]">
							<CirculerProgress size={0.4} />
							<p className="text-lg font-medium font-radio">Mobile App Development</p>
						</div>
					</div>
					<div className="grid grid-flow-col gap-2 m-4 mt-8 text-left">
						<div className="pr-9">
							<div>
								<p className="py-5 text-2xl font-medium font-radio">
									JavaScript - <span className="text-primary">(80%)</span>
								</p>
								<LinerProgress CustomClass="w-[80%]" />
							</div>
							<div>
								<p className="py-5 text-2xl font-medium font-radio">
									Node JS - <span className="text-primary">(60%)</span>
								</p>
								<LinerProgress CustomClass="w-[60%]" />
							</div>
							<div>
								<p className="py-5 text-2xl font-medium font-radio">
									React Native - <span className="text-primary">(70%)</span>
								</p>
								<LinerProgress CustomClass="w-[70%]" />
							</div>
							<div>
								<p className="py-5 text-2xl font-medium font-radio">
									Electron JS - <span className="text-primary">(70%)</span>
								</p>
								<LinerProgress CustomClass="w-[70%]" />
							</div>
						</div>
						<div className="pr-9">
							<div>
								<p className="py-5 text-2xl font-medium font-radio">
									React JS - <span className="text-primary">(80%)</span>
								</p>
								<LinerProgress CustomClass="w-[80%]" />
							</div>
							<div>
								<p className="py-5 text-2xl font-medium font-radio">
									Vue JS - <span className="text-primary">(40%)</span>
								</p>
								<LinerProgress CustomClass="w-[40%]" />
							</div>
							<div>
								<p className="py-5 text-2xl font-medium font-radio">
									TypeScript - <span className="text-primary">(60%)</span>
								</p>
								<LinerProgress CustomClass="w-[60%]" />
							</div>
							<div>
								<p className="py-5 text-2xl font-medium font-radio">
									Html & CSS - <span className="text-primary">(75%)</span>
								</p>
								<LinerProgress CustomClass="w-[75%]" />
							</div>
						</div>
					</div>
				</div>
				{/* <LinerProgress size={'25%'} /> */}
			</div>
		</section>
	);
};

export default SkillSection;
