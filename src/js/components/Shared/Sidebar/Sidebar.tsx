import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../../../styles/sidebar.scss";
import SidebarBtn from './SidebarBtn';
import onClickOutside from "react-onclickoutside";
import { SIDEBAR_OPEN } from "../../../redux/constants/actionTypes";

interface Props {
    theme: string,
    btnTheme: string,
    menuTheme: string,
    mobileMode: boolean,
    sidebarOpen?: boolean,
    openSidebar?: any
}

// mobileMode: if the app is currently in mobile mode
// open: whether the sidebar is open or closed for mobile mode
interface State {
    
}

const mapStateToProps = state => {
    return {
        sidebarOpen: state.sidebar.sidebarOpen
    }
};

const mapDispatchToProps = dispatch => ({
    openSidebar: payload => dispatch({ type: SIDEBAR_OPEN, payload }),
})

class Sidebar extends React.Component<Props, State> {

    constructor(props) {
        super(props);
        this.openSidebar = this.openSidebar.bind(this);
        this.linkSelected = this.linkSelected.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
    }

    // call on window resize
    // if the window width is size of mobile, then set mobile mode to false
    resize() {
        if (this.props.sidebarOpen) {
            this.props.openSidebar();
        }
    }

    openSidebar() {
        this.props.openSidebar();
    }

    handleClickOutside = () => {
        if (this.props.sidebarOpen) {
            this.props.openSidebar();
        }
    };

    linkSelected() {
        if (this.props.sidebarOpen) {
            this.props.openSidebar();
        }
    }

    render() {
        return (
            <div>
                {this.props.mobileMode ? 
                    <div className={"absolute menu-icon px-16 " + this.props.menuTheme} onClick={() => this.props.openSidebar() } >
                        <FontAwesomeIcon icon={['fas', 'bars']} /> 
                    </div>
                : "" }
                <div
                    className={
                        !this.props.mobileMode ? 
                            "desktop-sidebar float-left  " + this.props.theme :
                            !this.props.sidebarOpen ?
                                "mobile-sidebar-closed float-left "  + this.props.theme 
                            : "absolute mobile-sidebar-open float-left "  + this.props.theme 
                    }
                >
                    <div className={ this.props.mobileMode ? "pt-12" : "pt-32"}>
                        <div onClick={() => this.linkSelected() } >
                            <SidebarBtn
                                text="Link 1"
                                route=""
                                icon="home"
                                theme={this.props.btnTheme}
                            />
                        </div>
                        <div onClick={() => this.linkSelected() } >
                            <SidebarBtn
                                text="Link 2"
                                route="test"
                                icon="terminal"
                                theme={this.props.btnTheme}
                            />
                        </div>
                        <div onClick={() => this.linkSelected() } >
                            <SidebarBtn
                                text="Link 3"
                                route="test"
                                icon="signal"
                                theme={this.props.btnTheme}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(Sidebar));
