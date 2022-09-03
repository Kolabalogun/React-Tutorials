import React, { Component } from 'react';

function Conditional(props) {
    console.log(props.unreadMessaags)
    return(

        <div>
            {
props.unreadMessaags.length === 0 ? <h3>You hav no new messages</h3> : props.unreadMessaags
            }
        </div>

    )
}


export default Conditional;
