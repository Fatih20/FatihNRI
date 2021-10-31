import logo from './logo.svg';
import './Site.css';

//Components
import Header from './components/Header/header';
import Banner from './components/Banner/banner';
import Experiences from './components/Experiences/experiences';

//Styles
import {GlobalStyle} from './GlobalStyle';

function Site() {
  return (
    <div className="Main">
      <Header />
      <Banner />
      <Experiences />
    </div>
  );
}

export default Site;
