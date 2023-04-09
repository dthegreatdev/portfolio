/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Header = () => {
	return (
		<div className="bg-dark header-bg ">
			<div className="bg-dark">
				<header>
					<nav className="items-center h-20 px-44">
						<div className="flex items-center justify-between px-4 py-3 mx-auto md:justify-center">
							<a href="#" className="text-2xl font-bold text-white">
								Dev
							</a>
							<button className="text-white focus:outline-none focus:text-white md:hidden">
								<svg
									className="w-6 h-6"
									stroke="currentColor"
									fill="none"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"></path>
								</svg>
							</button>
							<div className="items-center justify-end flex-1 hidden md:flex">
								<a
									href="#section_me"
									className="mr-4 text-gray-300 hover:text-primary">
									Home
								</a>
								<a
									href="#section_about"
									className="mr-4 text-gray-300 hover:text-primary">
									About
								</a>
								<a
									href="#section_skill"
									className="mr-4 text-gray-300 hover:text-primary">
									Skills
								</a>
								<a
									href="#section_resume"
									className="mr-4 text-gray-300 hover:text-primary">
									Resume
								</a>
								<a
									href="#section_contact"
									className="text-gray-300 hover:text-primary">
									Contact
								</a>
							</div>
						</div>
						<div className="hidden md:hidden">
							<div className="px-2 pt-2 pb-3 space-y-1">
								<a
									href="#"
									className="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md focus:outline-none focus:text-white focus:bg-gray-700">
									Home
								</a>
								<a
									href="#"
									className="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md focus:outline-none focus:text-white focus:bg-gray-700">
									About
								</a>
								<a
									href="#"
									className="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md focus:outline-none focus:text-white focus:bg-gray-700">
									Services
								</a>
								<a
									href="#"
									className="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md focus:outline-none focus:text-white focus:bg-gray-700">
									Portfolio
								</a>
								<a
									href="#"
									className="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md focus:outline-none focus:text-white focus:bg-gray-700">
									Contact
								</a>
							</div>
						</div>
					</nav>
				</header>
			</div>
		</div>
	);
};

export default Header;
