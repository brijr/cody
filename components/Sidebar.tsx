import Link from 'next/link';

export default function Sidebar() {
	return (
		<div className="lg:w-60 lg:fixed left-0 top-0 flex lg:h-full bg-slate-300 p-6 flex-col justify-between">
			<div className="hidden lg:flex lg:flex-col sans">
				<p className="italic">Table of Contents</p>
				<div className="h-px bg-slate-500 mb-4 mt-2 w-1/2"></div>
				<Link
					className="hover:pl-1 hover:text-slate-500 transition-all duration-500"
					href="#introduction"
				>
					Introduction
				</Link>
				<Link
					className="hover:pl-1 hover:text-slate-500 transition-all duration-500"
					href="#positive-impact"
				>
					i. Positive Impact
				</Link>
				<Link
					className="hover:pl-1 hover:text-slate-500 transition-all duration-500"
					href="#outside"
				>
					ii. Outside of Work
				</Link>
				<Link
					className="hover:pl-1 hover:text-slate-500 transition-all duration-500"
					href="#relationships"
				>
					iv. Relationships
				</Link>
			</div>

			<div>
				<ul className="relative mb-6">
					<li className="relative flex items-center gap-4 mb-4">
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 hover:gap-2 hover:text-slate-500 transition-all duration-500"
							href="https://www.linkedin.com/in/cody-tower-813a465a/"
						>
							Linkedin
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								className="w-4 h-4"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
								/>
							</svg>
						</a>
					</li>

					<li className="relative flex items-center gap-4 mb-4">
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 hover:gap-2 hover:text-slate-500 transition-all duration-500"
							href="mailto:cody.m.tower@gmail.com"
						>
							Email
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								className="w-4 h-4"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
								/>
							</svg>
						</a>
					</li>

					<li className="relative flex items-center gap-4 mb-4">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://drive.google.com/file/d/1CTBup3ISmygwWL94KvMwK23ULyr673NJ/view?usp=sharing"
							className="flex items-center gap-1 hover:gap-2 hover:text-slate-500 transition-all duration-500"
						>
							Download Resume
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								className="w-4 h-4"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
								/>
							</svg>
						</a>
					</li>
				</ul>
				<p className="p-4 bg-slate-200 rounded-md mb-6 text-sm">
					Thank you for visiting. Please reach out to me with any questions.
				</p>
				<p className="text-xs italic">
					© Cody Tower.{' '}
					<a target="_blank" rel="noopener noreferrer" href="https://b98.io">
						All Rights Reserved
					</a>
					.
				</p>
			</div>
		</div>
	);
}
