import React, { Component } from 'react';
import {HashRouter as Router ,NavLink} from 'react-router-dom'

class Leftnav extends Component {
    state={
        current:0
    }
    // Libgc=()=>{
    //     let _this = this;
    //     const  oUl = document.getElementById("menu-list");
    //     const oLi = oUl.getElementsByTagName("li");
    //     for( var i = 0, len = oLi.length; i < len; i ++ ){
    //         oLi[i].className = '';
    //         oLi[i].index = i;
    //         oLi[i].onclick = function() {
    //             _this.setState({
    //                 current: this.index,
    //             });
    //         }
    //         oLi[this.state.current].classList.add('active');
    //     }
    // }
    render() {
        return (
            <div className={'leftnav'}>
                <Router> 
                    <ul 
                        // onClick={this.Libgc}
                        id={'menu-list'}
                    >
                        <li className={'iconfont icon-shouye'} ><NavLink exact to={'/'} ><span>首页</span></NavLink></li>
                        <li className={'iconfont icon-zhexiantu'} ><NavLink to={'/line'} ><span>折线图</span></NavLink></li>
                        <li className={'iconfont icon-zhuzhuangtu'} ><NavLink to={'/bar'}><span>柱状图</span></NavLink></li>
                        <li className={'iconfont icon-tubiao-bingtu'} ><NavLink to={'/pie'} ><span>饼图</span></NavLink></li>
                        <li className={'iconfont icon-sandiantu'} ><NavLink to={'/scatter'} ><span>散点图</span></NavLink></li>
                        <li className={'iconfont icon-ditumap30'} ><NavLink to={'/map'} ><span>地图</span></NavLink></li>
                        <li className={'iconfont icon-Kxiantu'} ><NavLink to={'/candlestick'} ><span>k线图</span></NavLink></li>
                    </ul>
                </Router>
               
            </div>
        );
    }
}

export default Leftnav;