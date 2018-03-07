import React from 'react';

export default class NavMobile extends React.Component{

    render(){

        var div = {
            padding: '20px 20px',
            backgroundColor: 'white',
        }

        var h1 = {
            fontSize: '20px',
            padding: '0',
            margin: '0',
        }
        return(
            <div style={div}>
                <h1 style={h1}>{this.props.nowPage}</h1>
            </div>
        );
    }
}