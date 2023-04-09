import React from 'react';
import Telephone from '../Assets/Images/telephone.svg';
import Email from '../Assets/Images/Email.svg';
import Location from '../Assets/Images/Location.svg';
import Input from './Input';

const ContactMeSection = () => {
	return (
		<section id="section_contact">
			<div className="bg-dark h-[100vh] max-md:px-7 max-lg:px-16 max-lg:pt-24  px-48 ">
				<div className="relative overflow-hidden text-center section-heading pb-14">
					<h2 className="relative z-10 mb-2 text-4xl font-bold uppercase font-radio">
						CONTACT ME
					</h2>
					<span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20">
						<span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary"></span>
					</span>
					<span className="absolute z-0 font-bold uppercase transform -translate-x-1/2 pointer-events-none font-radio left-1/2 -top-2 ltr-text text-9xl text-heading opacity-5 will-change-transform">
						CONTACT
					</span>
				</div>
				<div className="grid lg:grid-cols-2 md:grid-cols-1">
					<div className="m-4">
						<div className="text-left ">
							<p>Contact Information</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis,
								iusto harum possimus non praesentium qui facere.
							</p>
						</div>
						<div className="w-[20%] bg-primary bg-opacity-20 rounded-full h-1 my-9"></div>
						<div className="text-left ">
							<div className="bg-[#162033] border rounded-xl border-white border-opacity-20 mt-5">
								<div className="flex items-center p-3">
									<div className="flex items-center justify-center h-16 mx-8 text-center rounded-full bg-primary bg-opacity-20 aspect-square">
										<img
											src={Telephone}
											alt=""
											className="flex items-center justify-between h-8"
										/>
									</div>
									<div>
										<p className="font-semibold font-radio">Contact On Phone</p>
										<p>+91 9876543210</p>
									</div>
								</div>
							</div>
							<div className="bg-[#162033] border rounded-xl border-white border-opacity-20 mt-5">
								<div className="flex items-center p-3">
									<div className="flex items-center justify-center h-16 mx-8 text-center rounded-full bg-primary bg-opacity-20 aspect-square">
										<img
											src={Email}
											alt=""
											className="flex items-center justify-between h-8"
										/>
									</div>
									<div>
										<p className="font-semibold font-radio">Contact On Email</p>
										<a href="mailto:dthegreatdev@gmail.com">
											<p className="underline">dthegreatdev@gmail.com</p>
										</a>
									</div>
								</div>
							</div>
							<div className="bg-[#162033] border rounded-xl border-white border-opacity-20 mt-5">
								<div className="flex items-center p-3">
									<div className="flex items-center justify-center h-16 mx-8 text-center rounded-full bg-primary bg-opacity-20 aspect-square">
										<img
											src={Location}
											alt=""
											className="flex items-center justify-between h-8"
										/>
									</div>
									<div>
										<p className="font-semibold font-radio">Current Location</p>
										<p>India</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="m-4">
						<div className="bg-[#162033] border rounded-xl border-white border-opacity-20 mt-5 p-8">
							<div>
								<Input
									placeholder="Enter your name..."
									name="your_name"
									label="Name"
								/>
							</div>
							<div className="mt-5">
								<Input
									placeholder="Enter your email..."
									name="your_email"
									label="Email"
								/>
							</div>
							<div className="mt-5">
								<Input
									placeholder="Enter subject..."
									name="your_subbject"
									label="Subject"
								/>
							</div>
							<div className="mt-5 text-left">
								<label
									htmlFor="enter_message"
									className="text-sm text-left text-white">
									Message
								</label>
								<textarea
									name="enter_message"
									id="enter_message"
									rows="3"
									className="bg-[#0f172a] rounded-lg w-full  bg-opacity-10 mt-2"
									placeholder="Enter your message..."
								/>
							</div>
							<div className="text-left">
								<button className="mt-4 btn">SEND MAIL</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactMeSection;
