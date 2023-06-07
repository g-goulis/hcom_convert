/* eslint-disable */
import xAPIConfig from './config';

class xAPIManager {
    constructor() {
        // Initialize your xAPIManager object here
        // You can set up any necessary properties or perform any initialization logic
        const conf = {
            "endpoint" : xAPIConfig.endPointRef,
            "auth" : "Basic " + toBase64(xAPIConfig.keyRef + ":" + xAPIConfig.secretRef),
        };
        ADL.XAPIWrapper.changeConfig(conf);
    }

    // Define your xAPIManager functions here
    // These functions can be called by components

    sendStatement(statement) {
        // Implementation of sending a statement via xAPI
        // Example code:
        // xAPI send statement logic
    }

    // Other functions...

}

// Create a singleton instance of xAPIManager
const instance = new xAPIManager();

// Export the instance as the default export
export default instance;