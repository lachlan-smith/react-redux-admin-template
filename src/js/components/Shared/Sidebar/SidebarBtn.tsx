import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../../../styles/sidebar.scss";

interface Props {
    text: string,
    route: string,
    icon: any,
    theme: string
}

class SidebarBtn extends React.Component<Props, {}> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pb-2 px-4 ">
                <div className={"link-btn rounded pb-4 pt-4 " + this.props.theme}>
                    <Link to={"/" + this.props.route}>
                        <div className="px-4">
                            <div className="inline px-4">
                                <FontAwesomeIcon icon={['fas', this.props.icon]} />
                            </div>
                            <div className="inline">
                                {this.props.text}
                            </div> 
                        </div>
                    </Link>
                </div>
            </div>
        );
    }

}

export default SidebarBtn;
