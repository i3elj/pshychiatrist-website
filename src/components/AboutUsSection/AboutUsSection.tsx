import './AboutUsSection.css'

const Wave = () => (
	<svg width="1920" height="278" viewBox="0 0 1728 278" fill="none">
		<path d="M-70.5 14.6737C224 -86.8263 59 429.174 507 209.674C921.268 6.70137 1178 458.674 1798.5 187.174" stroke="#E0E0E0" strokeWidth="2"/>
	</svg>
)

const Disc = () => (
	<div style={{
			 width: 6,
			 height: 6,
			 backgroundColor: 'white',
			 borderRadius: 100
		 }}></div>
)

const AboutUsSection = () => (
	<section id="about-us">
		<div>
			<h1>What do We Do?</h1>
			<ul>
				<li><Disc/>Listen to your problems</li>
				<li><Disc/>Help you visualize the solution</li>
				<li><Disc/>Inspire you to solve them</li>
			</ul>
		</div>
		<Wave />
	</section>
)

export default AboutUsSection
