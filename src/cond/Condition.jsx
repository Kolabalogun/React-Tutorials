import React from 'react';


function Conditional(props) {

    return (
        <div>
            {
                props.isLoading === true ? <h3>Loading...</h3> : <h3>Loadi failed</h3>
            }

        </div>
    )





}

export default Conditional