import React from 'react';

const LinerProgress = ({ CustomClass }) => {
	// let CustomClass = `w-[${size}]`;
	// console.log('custom', CustomClass);
	return (
		<div>
			<div className="relative w-full h-4 rounded-full progress-bar bg-primary bg-opacity-20">
				<span
					className={`progress-progress absolute left-0 top-0 h-full rounded-full bg-primary origin-[0%_50%_0%] transform-none ${CustomClass}`}></span>
			</div>
		</div>
	);
};

export default LinerProgress;
