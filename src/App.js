import './App.css';
import AboutMeSection from './Components/AboutMeSection';
import ContactMeSection from './Components/ContactMeSection';
import Header from './Components/Header';
import MyResume from './Components/MyResume';
import SectionMe from './Components/SectionMe';
import SkillSection from './Components/SkillSection';

function App() {
	return (
		<div className="App selection:bg-primary">
			<Header />
			<SectionMe />
			<div>
				<AboutMeSection />
			</div>
			<div>
				<SkillSection />
			</div>
			<div>
				<MyResume />
			</div>
			<div>
				<ContactMeSection />
			</div>
		</div>
	);
}

export default App;
