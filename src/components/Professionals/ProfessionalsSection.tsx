import './ProfessionalsSection.css'

const Card = ({name, text, number, instagram, imageUrl}) => (
	<div id="card">
		<img src={`src/assets/${name}.png`} />
		<div>
			<h3>{name}</h3>
			<p>Specialist on family. She will love to help you to figure out what
			to do with all this battle happening inside your home.</p>
			<div id="info">
				<ul>
					<li class="small">Family</li>
					<li class="small">Education</li>
					<li class="small">Children</li>
				</ul>
				<div id="contact">
					<a href=""><img src="/src/assets/whatsapp.svg"/></a>
					<a href=""><img src="/src/assets/instagram.svg"/></a>
				</div>
			</div>
		</div>
	</div>
)

const ProfessionalsSection = () => (
	<section id="professionals">
		<h1>Our Professionals</h1>
		<Card name="Monica" />
		<Card name="Claire" />
		<Card name="Angela" />
	</section>
)

export default ProfessionalsSection
