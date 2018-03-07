import React from 'react';
import "./index.css";
import $ from 'jquery';
import Nav from './nav/nav';
import ViewPort from './left_side/view_port';
import {BrowserView, MobileView, isBrowser, isMobile} from 'react-device-detect';
import NavMobile from './nav/nav_mobile';


class Main extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            nowPage: "Accueil",
        }
        this.changeNowPage = this.changeNowPage.bind(this);
    }

    changeNowPage(newPage){
        this.setState({
            nowPage: newPage,
        });
    }

    componentDidMount(){
        $("#tableView").height($(window).height());
        $("#mobileDesign").height($(window).height());
    }

    render(){

        var mobileDesign = {
            backgroundColor: '#f3f3f3',
            color: 'black',
            fontSize: '10px',
        }

        return (
            <div>
            <BrowserView device={isBrowser}>
                <table id="tableView">
                    <tr>
                        <td>
                            <Nav nowNav={this.state.nowPage} modifyNav={this.changeNowPage}/>
                        </td>
                        <td>
                            <ViewPort page={this.state.nowPage}/>
                        </td>
                    </tr>
                </table>
            </BrowserView>
            <MobileView device={isMobile}>
                <div style={mobileDesign} id="mobileDesign">
                    <NavMobile nowPage={this.state.nowPage}/>
                </div>
            </MobileView>
                
            </div>
        );
    }
}

export default Main;