import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../../../styles/sidebar.scss";
import SidebarBtn from './SidebarBtn';
import onClickOutside from "react-onclickoutside";

interface Props {
    theme: string,
    btnTheme: string,
    menuTheme: string,
    mobileMode: boolean,
}

// mobileMode: if the app is currently in mobile mode
// open: whether the sidebar is open or closed for mobile mode
interface State {
    open?: boolean,
}

class Sidebar extends React.Component<Props, State> {

    constructor(props) {
        super(props);
        this.openSidebar = this.openSidebar.bind(this);
        this.linkSelected = this.linkSelected.bind(this);
        this.state = {
            open: false
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
    }

    // call on window resize
    // if the window width is size of mobile, then set mobile mode to false
    resize() {
        this.setState({ 
            open: false
        })
    }

    openSidebar() {
        console.log(this.state.open)
        this.setState({ 
            open: !this.state.open
        })
    }

    handleClickOutside = () => {
        if (this.state.open) {
            this.setState({ open: false })
        }
    };

    linkSelected() {
        this.setState({ 
            open: false
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.props.mobileMode ? 
                    <div className={"absolute menu-icon px-16 " + this.props.menuTheme} onClick={() => this.openSidebar() } >
                        <FontAwesomeIcon icon={['fas', 'bars']} /> 
                    </div>
                : "" }
                <div
                    className={
                        !this.props.mobileMode ? 
                            "desktop-sidebar float-left  " + this.props.theme :
                            !this.state.open ?
                                "mobile-sidebar-closed float-left "  + this.props.theme 
                            : "absolute mobile-sidebar-open float-left "  + this.props.theme 
                    }
                >
                    <div className="pt-32">
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
            </React.Fragment>
        );
    }

}

export default onClickOutside(Sidebar);
