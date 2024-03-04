import './styles.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-logo-container'>
                <label className='header-logo'>{'<LM />'}</label>
            </div>
            <div className='header-options-container'>
                <ul className="header-options">
                    <li>Inicio</li>
                    <li>Sobre Mim</li>
                    <li>Tecnologias</li>
                    <li>Projetos</li>
                    <li>Contatos</li>
                </ul>
            </div>
        </div>
    )
}

export default Header