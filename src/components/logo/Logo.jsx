import React, { Component } from 'react';

class Logo extends Component {
    render() {
        return (
            <div className={'logo'}>
                <img 
                    width={'100%'} 
                    height={'100%'} 
                    src={require('../../static/img/logo.jpg')} 
                    alt=""
                />
            </div>
        );
    }
}

export default Logo;