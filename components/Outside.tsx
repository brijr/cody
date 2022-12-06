import Image from 'next/image';
// cody images
import cody1 from '../public/cody1.jpg';
import cody2 from '../public/cody2.jpg';
import cody3 from '../public/cody3.jpg';
import cody4 from '../public/cody4.jpg';
import cody5 from '../public/cody5.JPG';
import cody6 from '../public/cody6.JPG';

export default function outside() {
	return (
		<div className="p-8 lg:p-24 lg:ml-60" id="outside">
			<h2 className="text-4xl mb-8">Outside of Work</h2>
			<div className="lg:flex flex-wrap mb-8 rounded-xl">
				<div className="lg:w-1/3 p-2">
					<Image className="rounded-xl" src={cody2} alt="placeholder"></Image>
				</div>
				<div className="lg:w-1/3 p-2">
					<Image className="rounded-xl" src={cody1} alt="placeholder"></Image>
				</div>
				<div className="lg:w-1/3 p-2">
					<Image className="rounded-xl" src={cody4} alt="placeholder"></Image>
				</div>
				<div className="lg:w-1/3 p-2">
					<Image className="rounded-xl" src={cody3} alt="placeholder"></Image>
				</div>
				<div className="lg:w-1/3 p-2">
					<Image className="rounded-xl" src={cody6} alt="placeholder"></Image>
				</div>
				<div className="lg:w-1/3 p-2">
					<Image className="rounded-xl" src={cody5} alt="placeholder"></Image>
				</div>
			</div>
		</div>
	);
}
