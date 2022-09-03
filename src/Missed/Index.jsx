import React, { Component } from 'react';
import Conditional from './Condi';



class Index extends Component {
    constructor() {
        super()

this.state = {
    unreadMessaags: [
        "I love You",
        "What tf are you talking about"
    ]
}

    }
 

    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                unreadMessaags: "You have no Unread Messages"
            })
        }, 1500)
    }

    render() { 
        return (
            <Conditional unreadMessaags={this.state.unreadMessaags}/>
        );
    }
}
 
export default Index;