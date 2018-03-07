import React from 'react';

class CompElNav extends React.Component{

    logoImg = {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '30px',
        width: '30px',
        display: 'inline-block',
        verticalAlign: 'middle',
    }
    nameNav = {
        display: 'inline-block',
        verticalAlign: 'middle',
        margin: '0 0 0 15px',
        fontSize: '25px',
    }

    constructor(props){
        super(props);
        this.state = {
            name: props.name,
        };
        const pathToImg = require("../img/logos/" + this.state.name + ".png");
        this.logoImg.backgroundImage = 'url("' + pathToImg + '")';
        this.updateNav = this.updateNav.bind(this);
    }

    updateNav(){
        this.props.modifyNav(this.state.name);
    }

    render(){
        
        var elementView = {
            padding: '10px 10px 10px 20px',
            margin: '0',
            cursor: 'pointer',
        };
        if(this.props.nowNav === this.state.name){
            elementView.backgroundColor = 'rgb(32, 32, 32)';
            elementView.borderLeft = '3px solid white';
        }
        else{
            elementView.backgroundColor = "rgba(0, 0, 0, 0)";
            elementView.borderLeft = '3px solid rgba(0, 0, 0, 0)    ';
        }
        return(
            <div style={elementView} onClick={this.updateNav}>
                <div style={this.logoImg}></div>
                <div style={this.nameNav}>{this.state.name}</div>
            </div>
        );
    }
}

export default CompElNav;