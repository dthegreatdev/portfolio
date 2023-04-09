import React from 'react';

const CirculerProgress = ({ size }) => {
	return (
		<div>
			<div className="relative mb-2 inline-block text-primary">
				<svg
					className="-rotate-90 circle fill-none stroke-primary"
					width="120"
					height="120"
					viewBox="0 0 120 120">
					<circle
						className="circlebg stroke-primary opacity-[0.2]"
						cx="60"
						cy="60"
						r="54"
						pathLength="1"
						strokeLinecap="round"
						strokeWidth="12"></circle>
					<circle
						cx="60"
						cy="60"
						r="54"
						strokeLinecap="round"
						strokeWidth="12"
						opacity="1"
						pathLength="1"
						strokeDashoffset="0px"
						strokeDasharray={`${size}px 1px`}></circle>
				</svg>
				<span className="absolute text-xl text-center transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-body">
					{size * 100} %
				</span>
			</div>
		</div>
	);
};

export default CirculerProgress;
