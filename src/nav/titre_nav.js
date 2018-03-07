import React from "react";
import "./titre_nav.css";

class TitreNav extends React.Component{

    h1Digo = {
        display: 'inline-block',
        verticalAlign: 'middle',
        color: 'white',
        margin: '0',
        marginLeft: '10px',
        fontSize: '20px',
    };

    render(){
        return(
            <div id="nav_title">
                <div className="block_logo_digo"></div>
                <h1 style={this.h1Digo}>Digo</h1>
            </div>
        );
    }
}
export default TitreNav;