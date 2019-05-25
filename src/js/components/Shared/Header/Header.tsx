import React from "react";
import { connect } from "react-redux"
import "../../../../styles/header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from './Dropdown';
import { USER_MENU_OPEN } from "../../../redux/constants/actionTypes";

interface Props {
    theme: string,
    dropdownTheme: string,
    iconTheme: string
    userMenuOpen?: any,
    openUserMenu?: any
}

interface State {
    userMenuOpen?: boolean
}

const mapStateToProps = state => {
    return {
        userMenuOpen: state.menu.userMenuOpen
    }
};

const mapDispatchToProps = dispatch => ({
    openUserMenu: payload => dispatch({ type: USER_MENU_OPEN, payload }),
})

class Header extends React.Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = { userMenuOpen: this.props.userMenuOpen };
    }

    render() {
        return (
            <div className={"header absolute w-full z-50 " + this.props.theme} >
                <div className="flex px-12 py-4">
                    <div className="lg:flex-none  lg:hidden header-icon " ></div>
                    <div className="flex-1 py-2 px-12 lg:px-0 text-2xl">
                        Admin Template
                    </div>
                    <div>
                        <div
                            className={"header-icon " + this.props.iconTheme + " ignore-react-onclickoutside"}
                            onClick={() => {
                                if (!this.props.userMenuOpen) {
                                    this.props.openUserMenu()
                                }
                            }}>
                            <FontAwesomeIcon icon={['fas', 'user']} />
                        </div>
                        <div className={"absolute dropdown-transform rounded " + this.props.dropdownTheme}>
                            <Dropdown
                                visible={this.props.userMenuOpen}
                            />
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
