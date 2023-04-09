import React from 'react';

const Input = ({ placeholder, name, label }) => {
	return (
		<div className="text-left">
			<label htmlFor={name} className="text-sm text-left text-white">
				{label}
			</label>
			<input
				type="text"
				name={name}
				className="bg-[#0f172a] rounded-lg w-full  bg-opacity-10 mt-2"
				placeholder={placeholder}
			/>
		</div>
	);
};

export default Input;
