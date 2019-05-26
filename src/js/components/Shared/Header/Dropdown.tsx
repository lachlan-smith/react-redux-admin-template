import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../../../styles/sidebar.scss";
import { DARK_MODE, USER_MENU_OPEN } from "../../../redux/constants/actionTypes";
import { changeTheme } from "../../../redux/actions/index";
import { openUserMenu } from "../../../redux/actions/menuActions";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import onClickOutside from "react-onclickoutside";

interface Props {
    visible: boolean,
    changeTheme: any,
    userMenuOpen?: any
    openUserMenu?: any,
    darkMode?: boolean
}

const mapStateToProps = state => {
    return {
        darkMode: state.theme.darkMode,
        userMenuOpen: state.menu.userMenuOpen
    }
};

const mapDispatchToProps = dispatch => ({
    changeTheme: payload => dispatch({ type: DARK_MODE, payload }),
    openUserMenu: payload => dispatch({ type: USER_MENU_OPEN, payload }),
})


class Dropdown extends React.Component<Props, {}> {

    constructor(props) {
        super(props);
    }

    handleClickOutside = () => {
        if (this.props.userMenuOpen) {
            this.props.openUserMenu()
        }

    };

    render() {
        return (
            <React.Fragment>
                {this.props.userMenuOpen ?
                    <div className="p-4 dropdown shadow-md">
                        <FormControlLabel
                            control={
                                <Switch
                                    onChange={this.props.changeTheme}
                                    value="darkTheme"
                                    color="primary"
                                    checked={this.props.darkMode}
                                />
                            }
                            label=""
                        />
                        <FontAwesomeIcon icon={['fas', 'moon']} />&nbsp;&nbsp;Dark Theme
                    </div>
                    : ""}
            </React.Fragment>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(Dropdown));
