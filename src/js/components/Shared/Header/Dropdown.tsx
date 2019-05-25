import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../../../styles/sidebar.scss";
import { DARK_MODE } from "../../../redux/constants/actionTypes";
import { changeTheme } from "../../../redux/actions/index";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import onClickOutside from "react-onclickoutside";

interface Props {
    visible: boolean,
    changeTheme: any
}

interface State {
    visible: boolean
}

const mapStateToProps = state => {
    return {
        darkMode: state.theme.darkMode
    }
};

const mapDispatchToProps = dispatch => ({
    changeTheme: payload => dispatch({ type: DARK_MODE, payload }),
})

class Dropdown extends React.Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = { visible: this.props.visible }
    }

    handleClickOutside = () => {
        
    };

    render() {
        return (
            <React.Fragment>
                {this.state.visible ?
                    <div className="p-4 dropdown shadow-md">
                        <FormControlLabel
                            control={
                                <Switch
                                    onChange={this.props.changeTheme}
                                    value="darkTheme"
                                    color="primary"
                                />
                            }
                            label="Dark Theme"
                        />
                    </div>
                    : ""}
            </React.Fragment>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(Dropdown));
