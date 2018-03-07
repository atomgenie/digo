import React from 'react';

class TitleSide extends React.Component{

    h2 = {
        margin: '0',
        padding: '0',
        fontSize: '50px',
    }

    constructor(props){
        super(props);
    }
    render(){

        var div = {
            margin: '0 0 20px 0',
        }
        return (
            <div style={div}>
                <h2 style={this.h2}>{this.props.title}</h2>
            </div>
        );
    }
}

export default TitleSide;