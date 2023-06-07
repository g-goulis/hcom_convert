import logo from './logo.svg';
// import './css/App.css';
import './css/style.css';
import './css/font-awesome.min.css';
import FrameManager from "./components/FrameManager";
function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}

        {/* Below is the start */}

        <div className="wrapper">
            <div className="count_on_me_wrap">
                <h2>H-E-B Counts on Me: Basket Pushouts July 2022</h2>
                <FrameManager />
            </div>
        </div>
    </div>
  );
}

export default App;
