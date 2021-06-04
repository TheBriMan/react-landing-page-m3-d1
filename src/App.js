import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
      <section className="App-section1">  
        <nav>
          <ul className="App-nav">
            <li>
              <img src="/images/ironhack-logo.svg" />
            </li>
            <li>
              <img src="/images/menu-top.svg" />
            </li>
          </ul>
        </nav>
        <header className="App-header">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
          <a href="#">Awesome!</a>
        </header>
      </section>
      <section className="App-section2">
        <div>
          <img src="images/icon1.png"/>
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img src="images/icon2.png"/>
          <h2>Components</h2>
          <p>Built encapuslated components that manage their state.</p>
        </div>
        <div>
          <img src="images/icon3.png"/>
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div>
          <img src="images/icon4.png"/>
          <h2>JSX</h2>
          <p>Statically-typed. designed to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
