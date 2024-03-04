import './styles.css'
import image from '../../images/imagem1.png'
import iconLinkedin from '../../images/icon-linkedin.svg'
import iconGitHub from '../../images/icon-github.svg'
import iconGmail from '../../images/icon-gmail.svg'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-side'>
                <div className='home-content-container'>
                    <div className='home-text-container'>
                        <span className='text'>Olá 👋 sou o Leandro</span> <br/>
                        <span className='text big'>Eu sou</span> <br/>
                        <span className='text big'>Desenvolvedor Web</span> <br/>
                        <span className='text'>Possuo 1 ano de experiência como Programador de sistemas</span>
                    </div>
                    <div className='home-about-button-container'>
                        <button className='home-about-button'>More about me</button>
                    </div>
                    <div className='home-icons-container'>
                        <ul className="home-icons">
                            <li>
                                <Link to="https://www.linkedin.com/in/leandro-mello-526958220/">
                                    <img className='home-icon' src={iconLinkedin} alt="LinkedIn"/>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://github.com/Leandrinh0">
                                    <img className='home-icon' src={iconGitHub} alt="GitHub"/>
                                </Link>
                            </li>
                            <li>
                                <Link to="/gmail">
                                    <img className='home-icon' src={iconGmail} alt="Gmail"/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='home-side right'>
                <div className='home-image-container'>
                    <img className='home-image' src={image} alt='Developer working' />
                </div>
            </div>
        </div>
    )
}

export default Home