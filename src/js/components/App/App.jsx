import React from "react";
import Layout from "../Shared/Layout";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faUser, faBars, faHome, faTerminal, faSignal } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faUser, faBars, faHome, faTerminal, faSignal);

class App extends React.Component {

render() {
    return (
            <Layout/>     
        );
    }
}

export default App;


