import React from "react";
import { connect } from "react-redux"
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import "../../../styles/tailwind.css";
import "../../../styles/main.scss";
import { MOBILE_WINDOW_SIZE } from '../../constants';
import { Route, Link, Switch, withRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Test from "../Pages/Test/Test";

interface Props {
    darkMode: boolean
}

interface State {
    mobileMode: boolean
}

const mapStateToProps = state => {
    return {
        darkMode: state.theme.darkMode
    }
};

class Layout extends React.Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
            mobileMode: window.innerWidth <= MOBILE_WINDOW_SIZE
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
    }

    // call on window resize
    // if the window width is size of mobile, then set mobile mode to false
    resize() {
        this.setState({ 
            mobileMode: window.innerWidth <= MOBILE_WINDOW_SIZE
        })
    }

    render() {
        return (
            <div className="font-sans">
                <div className={ this.props.darkMode ? "content-base-dark" : "content-base"}>
                    <Header 
                        theme={ 
                            this.props.darkMode ? 
                            "header-dark" : "header-light" 
                        } 
                        dropdownTheme={
                            this.props.darkMode ? 
                            "dropdown-dark" : "dropdown-light"
                        }
                        iconTheme={
                            this.props.darkMode ? 
                            "header-icon-dark" : "header-icon-light"
                        }
                    />
        
                    <Sidebar 
                        theme={ this.props.darkMode ? 
                            "sidebar-dark" : "sidebar-light" }
                        btnTheme={ this.props.darkMode ?
                            "sidebar-btn-dark" : "sidebar-btn-light" }
                        menuTheme={ this.props.darkMode ?
                            "menu-icon-dark" : "menu-icon-light" }
                        mobileMode={this.state.mobileMode}
                    />
                    <div className={this.state.mobileMode ? "content-mobile" : "content"}>
                        <Route exact path="/" component={Home} replace />
                        <Route path="/test" component={Test} replace />
                    </div>
                </div>
            </div>
        );
    }

}

export default withRouter(connect(mapStateToProps, null)(Layout));