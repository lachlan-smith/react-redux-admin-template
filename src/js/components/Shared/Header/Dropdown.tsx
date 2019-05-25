import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../../../styles/sidebar.scss";
import { DARK_MODE  } from "../../../redux/constants/actionTypes";
import { changeTheme } from "../../../redux/actions/index";

interface Props {
    visible: boolean,
    changeTheme: any
}

const mapStateToProps = state => {
    return {
        darkMode: state.theme.darkMode
    }
};

const mapDispatchToProps = dispatch => ({
    changeTheme: payload => dispatch({ type: DARK_MODE, payload })
})

class Dropdown extends React.Component<Props, {}> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            {this.props.visible ?
                <div className="p-4 dropdown shadow-md">
                    <div className="dropdown-link" onClick={this.props.changeTheme}>
                        Dark Mode
                    </div>
                </div>
            : "" }
            </React.Fragment>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
