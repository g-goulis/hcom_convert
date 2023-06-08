import './css/style.css';
import './css/font-awesome.min.css';
import xAPIConfig from './util/config';
import FrameManager from "./components/FrameManager";
import xAPIManager from "./util/xAPIManager";

import {useEffect, useState} from "react";
function App() {

    const [xAPIController, setxAPIController] = useState(null);

    useEffect(() => {
        const fetchXAPIManager = async () => {
            const { default: xAPIManager } = await import('./util/xAPIManager');

            // Example usage: Creating an instance and sending a statement
            const instance = new xAPIManager();
            setxAPIController(instance);
        };

        fetchXAPIManager().then(r => {

            xAPIController.sendStatement()
        });

        setxAPIController(xAPIManager)
        const conf = {
            "endpoint" : xAPIConfig.endPointRef,
            /* eslint-disable */
            "auth" : "Basic " + toBase64(xAPIConfig.keyRef + ":" + xAPIConfig.secretRef),
        };
        /* eslint-disable */
        ADL.XAPIWrapper.changeConfig(conf);

        let stmt = {"actor" : {"mbox" : "mailto:tom@example.com"},
            "verb" : {"id" : "http://adlnet.gov/expapi/verbs/answered",
                "display" : {"en-US" : "answered"}},
            "object" : {"id" : "http://adlnet.gov/expapi/activities/question"}};
        /* eslint-disable */
        ADL.XAPIWrapper.sendStatement(stmt, function(err, res, body) {
            if (err) {
                console.log(err)
                return;
            }
        /* eslint-disable */
        ADL.XAPIWrapper.log("[" + body.id + "]: " + res.status + " - " + res.statusText);
        });

        return () => {
            // Cleanup logic, if needed
            // This function will be called when the component unmounts
        };
    }, []);

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
