import { useEffect, useState } from 'react';
import logo_black from './logo_black.svg';
import Total from './components/Total';
import List from './components/List';
import Form from './components/Form';
import image from './image.svg';
import logo from './logo.svg';
import './App.css';

function App() {
  const [statement, setStatement] = useState([]);
  const [isHide, setIsHide] = useState(false);
  const [isWhite, setIsWhite] = useState(false);
  const [isLanding, setisLanding] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("statement")) {
      setStatement(JSON.parse(localStorage.getItem("statement")));
    }
  }, [])

  useEffect(() => {
    if (statement.length > 0) {
      localStorage.setItem("statement", JSON.stringify(statement));
    }
  }, [statement])

  useEffect(() => {
    if (isHide) {
      const timer = setTimeout(() => {
        setIsWhite(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isHide]);

  useEffect(() => {
    if (isWhite) {
      const timer = setTimeout(() => {
        setisLanding(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isWhite]);

  const hideContainer = () => {
    setIsHide(!isHide);
  }

  return (isLanding) ? (
    <div className={(isWhite) ? "App transition" : "App"}>
      <div className={(isHide) ? "home hide" : "home"}>
        <div className="container">
          <img src={logo} alt={"logo"} />
          <h1>Centralize o controle das suas finanças</h1>
          <h4>de forma rápida e segura</h4>
          <button className="start" onClick={hideContainer}>Iniciar</button>
        </div>
        <img src={image} alt={"filler"} className="filler" />
      </div>
    </div>
  ) : (
    <div>
      <header>
        <img className='logo' src={logo_black} alt={"logo"} />
        <button className="home-button" onClick={() => {
          window.location.reload(false);
        }}>Inicio</button>
      </header>
      <main>
        <aside>
          <Form statement={statement} setStatement={setStatement} />
          <Total statement={statement} />
        </aside>
        <List statement={statement} setStatement={setStatement} />
      </main>
    </div>
  );
}

export default App;
