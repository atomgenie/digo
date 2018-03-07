import React from "react";
import "./nav.css";
import TitreNav from "./titre_nav";
import CompElNav from "./comp_el_nav";

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            navigation: ["Accueil", "Recherche", "Projets", "Argent"],
        }
    }
    render(){
        return (
            <div id="navSideLeft">
                <TitreNav />
                {
                    this.state.navigation.map(el => <CompElNav nowNav={this.props.nowNav} name={el} modifyNav={this.props.modifyNav}/>)
                }
            </div>
        );
    }
}

export default Nav;