import React, { Component } from 'react';

import Aux from '../Auxiliary';


class Layout extends Component {
    state = {
        
    }

    render () {
        return (
            <Aux>
                <main className='Content'>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;