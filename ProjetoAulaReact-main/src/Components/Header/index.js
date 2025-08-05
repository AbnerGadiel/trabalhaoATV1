
import Card from './Card';
import Menu from './Menu';
import './index.css'

function Header(){
    const biografia = "Aluno de Tecnologia ...";
    return(
        <header>
          <Card 
            fotoPerfil="fotoPerfil.jpg"
            nome="Abner Gadiel" 
            biografia={biografia}
          />
          <Menu />
        </header>
    )
}

export default Header;