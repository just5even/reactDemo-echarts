import React, { Component } from 'react';
import {HashRouter as Router,Link} from 'react-router-dom'

class Rightnav extends Component {
    render() {
        return (
            <div className={'rightnav'}>
                <Router>
                    <ul>
                        <li><Link to={'/'} className={'active'}>Seven</Link></li>
                        <li><Link to={'/'} className={'iconfont icon-icon'}></Link></li>
                        <li><Link to={'/'} className={'iconfont icon-dianzan1'}></Link></li>
                        <li><Link to={'/'} className={'iconfont icon-liebiao'}></Link></li>
                        <li><Link to={'/'} className={'iconfont icon-aixin'}></Link></li>
                    </ul>
                </Router>
            </div>
        );
    }
}

export default Rightnav;