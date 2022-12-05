import Image from 'next/image';
import Gardens from '../public/gardens.jpg';
import Avalon from '../public/avalon.jpg';
import Discovery from '../public/discovery.jpg';

export default function positive() {
	return (
		<div className="p-8 lg:p-24 lg:ml-60">
			<h2 className="text-4xl mb-8" id="positive-influence">
				Positive Influence
			</h2>
			<div className="lg:flex items-center gap-8 mb-8 lg:bg-slate-100 p-6 rounded-md">
				<div className="lg:w-1/2">
					<Image src={Gardens} alt="placeholder"></Image>
				</div>
				<div className="lg:w-1/2">
					<h3 className="text-2xl my-6 italic">Personal Influence</h3>
					<p>
						Cody has built a life around serving others. Some of these include: Launching Seniors
						Serving Seniors program with the Utah Food Bank and being a volunteer with the Senior
						Food Program. Providing voluntary spiritual and ecclesiastical leadership to over 10
						local congregations, including over 3800 congregants. Other efforts include voluntary
						missionary work, coaching local youth sports teams, and providing pro bono counseling
						services.
					</p>
				</div>
			</div>
			<div className="lg:flex items-center gap-8 mb-8 lg:bg-slate-100 p-6 rounded-md">
				<div className="lg:w-1/2">
					<Image src={Gardens} alt="placeholder"></Image>
				</div>
				<div className="lg:w-1/2">
					<h3 className="text-2xl my-6 italic">Leadership</h3>
					<p>
						A life-long proponent of servant leadership principles, Cody has had the opportunity to
						both influence and be influenced by, thousands of the very best people around.
					</p>
				</div>
			</div>
			<div className="lg:flex items-center gap-8 mb-8 lg:bg-slate-100 p-6 rounded-md">
				<div className="lg:w-1/2">
					<Image src={Gardens} alt="placeholder"></Image>
				</div>
				<div className="lg:w-1/2">
					<h3 className="text-2xl my-6 italic">Kalakaua Gardens</h3>
					<p>
						As Vice President of Senior Living, Cody served as project leader for Kalakaua Gardens;
						a 208 Unit, 18-story high-rise senior living community in Waikiki, Hawaii. Ground-up
						build, stabilized in 24 months. Three-time winner of Hawaii&apos;s Best Award and
						featured in the Wall Street Journal.
					</p>
				</div>
			</div>
			<div className="lg:flex items-center gap-8 mb-8 lg:bg-slate-100 p-6 rounded-md">
				<div className="lg:w-1/2">
					<Image src={Avalon} alt="placeholder"></Image>
				</div>
				<div className="lg:w-1/2">
					<h3 className="text-2xl my-6 italic">Avalon Senior Living</h3>
					<p>
						A 30-year old Skilled Nursing Company hired Cody to launch a Senior Living Division. The
						launch included ground-up development of Kalakaua Gardens in Honolulu HI. Initiating and
						strengthening relationships with capital partners, vetting 100&apos;s of acquisition
						opportunities, feasibility studies, community design, day-to-day operations and sales
						leadership. Growing from 0 to over 900 units, 12 communities under management.
					</p>
				</div>
			</div>
			<div className="lg:flex items-center gap-8 mb-8 lg:bg-slate-100 p-6 rounded-md">
				<div className="lg:w-1/2">
					<Image src={Discovery} alt="placeholder"></Image>
				</div>
				<div className="lg:w-1/2">
					<h3 className="text-2xl my-6 italic">Discovery Senior Living</h3>
					<p>
						During his first year as a regional operations leader for the Longhorn region, Cody has
						been successful in driving census, growing NOI, eliminating agency, reducing overall PRD
						expenses, and retaining 90% of Executive Director leadership. Five communities earned
						Great Place to Work Status, and 5 Best of Senior Living for US News & World Report.
						Portfolio includes over 1100 units (800+ IL, 250 AL, 100 MC). In November of 2022, the
						Longhorn Region just received the highest customer satisfaction scores in the entire
						company.
					</p>
				</div>
			</div>
		</div>
	);
}
