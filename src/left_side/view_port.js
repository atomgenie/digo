import React from 'react';
import TitleSide from './title_side';
import $ from 'jquery';


import Accueil from '../pages/accueil/accueil';
import Recherche from '../pages/recherche/recherche';

class ViewPort extends React.Component{

    renderView = {
        backgroundColor: '#202020',
        borderRadius: '8px 0 0 8px',
        margin: '10px 0 0 0',
        padding: '30px',
        overflow: 'auto',
    }

    link = {
        "Accueil": <Accueil />,
        "Recherche": <Recherche />,
    }

    componentDidMount(){
        $("#view_port").height($(window).height() - 20);
    }

    constructor(props){
        super(props);
    }
    render(){
        return (
            <div id="view_port" style={this.renderView}>
                <TitleSide title={this.props.page} />
                {(this.link[this.props.page]) ? this.link[this.props.page] : "Rien"}
                
            </div>
        );
    }
}

export default ViewPort;