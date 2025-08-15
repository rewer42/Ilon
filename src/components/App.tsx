import './main.css';
import logo from '../assets/images/logo.png';
import NavButton from "./NavButton/NavButton.tsx";

function App() {

  return (
    <>
        <div className='background'>
            <div className='background_image'/>
            <div className='header'>
                <div className='header_wrapper'>
                    <a href='/' className='logo_wrapper'>
                        <div className="corner top-left"></div>
                        <div className="corner top-right"></div>
                        <div className="corner bottom-left"></div>
                        <div className="corner bottom-right"></div>
                        <img src={logo} className="logo"/>
                    </a>
                    <div className='nav_button_wrapper'>
                    <NavButton href={''}>Главная</NavButton>
                        <NavButton href={''}>Технология</NavButton>
                        <NavButton href={''}>График полетов</NavButton>
                        <NavButton href={''}>Гарантии</NavButton>
                        <NavButton href={''}>О компании</NavButton>
                        <NavButton href={''}>Контакты</NavButton>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
