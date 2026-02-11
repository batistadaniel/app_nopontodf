import { Link } from "react-router-dom";

function NavBar() {
  return (
    // flex flex-col justify-center --> centraliza os itens verticalmente na coluna
    <nav className="h-screen bg-blue-500 ">
      <ul className="">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/linha">Linhas</Link></li>
        <li><Link to="/mapa">Mapa</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
