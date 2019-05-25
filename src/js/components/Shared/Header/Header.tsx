import React from "react";
import "../../../../styles/header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from './Dropdown';

interface Props {
    theme: string,
    dropdownTheme: string,
    iconTheme: string
}

interface State {
    userMenuOpen?: boolean
}

class Header extends React.Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = { userMenuOpen: false };
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
                            className={"header-icon " + this.props.iconTheme} 
                            onClick={() => { this.setState({ userMenuOpen: !this.state.userMenuOpen }) }}>
                            <FontAwesomeIcon icon={['fas', 'user']} />
                        </div>
                        <div className={"absolute dropdown-transform rounded " + this.props.dropdownTheme}>
                            <Dropdown 
                                visible={this.state.userMenuOpen}
                            />
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }

}

export default Header;
