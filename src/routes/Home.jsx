import { Link } from "react-router-dom";

function Home() {
  return (
    // <h1 className="h-screen flex justify-center items-center">Home</h1>
    <div className="home-container justify-center items-center">

      <div className="home-logo"> 
        <h1>No Ponto DF</h1>
      </div>

      <nav className="home-nav">
        <ul>
          <li><Link to="/linha">Linhas</Link></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
        </ul>
      </nav>

      <section className="home-info"> 
        <h2>Bem-vindo ao No Ponto DF!</h2>
        <p>Encontre informações sobre as linhas de transporte público do Distrito Federal.</p>
      </section>
    </div>
  );
}

export default Home;
