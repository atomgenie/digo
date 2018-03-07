import React from "react";
import "./accueil.css";

class Accueil extends React.Component{
    render(){

        var tableAc = {
            border: 'collapse',
            width: '100%',
            border: '1px solide white',
        }
        var right = {
            width: '450px',
            verticalAlign: 'top',
        }
        var cells = {
            verticalAlign: 'top',
            width: 'auto',
        }

        return(
            <table style={tableAc}>
                <tr>
                    <td style={cells}>
                        <ProjetWidget />
                    </td>
                    <td style={right}>
                        <MessageWidget />
                        <div style={{height: '100px'}}></div>
                    </td>
                </tr>
            </table>
        );
    }
}

class ProjetWidget extends React.Component{

    render(){

        var block = {
            display: 'inline-block',
            borderRadius: '999px',
            padding: '10px',

        }

        const myLogo = require("../../img/logos/Projets.png")

        var logo = {
            height: '70px',
            width: '70px',
            backgroundImage: 'url(' + myLogo + ')',
            display: 'inline-block',
            backgroundSize: 'cover',
            verticalAlign: 'middle',
        }

        var cmp = {
            display: 'inline-block',
            verticalAlign: 'middle',
            margin: '0 0 0 20px',
        }

        var nb = {
            fontSize: '40px',
            margin: '0',
        }
        var sous = {
            fontSize: '15px',
            fontStyle: 'italic',
            margin: '-10px 0 0 0',
        }
        var point = {
            height: '10px',
            width: '10px',
            backgroundColor: 'white',
            borderRadius: '999px',
            display: 'inline-block',
            margin: 'auto 10px auto 15px',
            verticalAlign: 'middle',
        }

        return (
            <div class="projetWidget" style={block}>
                <div style={logo}></div>
                <div style={cmp}>
                    <div style={nb}>42</div>
                    <div style={sous}>Projets</div>
                </div>
                <div style={point}></div>
            </div>
        );
    }
}

class MessageWidget extends React.Component{
    render(){
        var h3 = {
            fontSize: '40px',
            margin: '0',
            padding: '0',
        }
        var block = {
            backgroundColor: 'white',
            color: 'black',
            padding: '10px 20px',
            borderRadius: '5px',
        }
        return (
            <div style={block} class="shadow">
                <h3 style={h3}>Activités</h3>
                <ToDoWidget />
                <ToDoWidget />
            </div>
        );
    }
}

class ToDoWidget extends React.Component{


    render(){

        var h4 = {
            fontSize: '35px',
            color: '#fff9',
            margin: '0',
            padding: '0',
        }
        var blackInside = {
            backgroundColor: '#0000004d',
            color: 'white',
            borderRadius: '5px',
            padding: '0',
            marginTop: '15px',  
        }


        return(
            <div class="todoWidget shadow">
                <h4 style={h4}>To-Do</h4>
                <div style={blackInside}>
                    <div class="todoWidgetInside">
                        test yolo
                    </div>
                    <div class="todoWidgetInside">
                        test yolo
                    </div>
                    <div class="todoWidgetInside">
                        test yolo
                    </div>
                    <div class="todoWidgetInside">
                        test yolo
                    </div>
                </div>
            </div>
        );
    }
}


export default Accueil;