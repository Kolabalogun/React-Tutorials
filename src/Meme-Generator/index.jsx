import React, { Component } from 'react';

import MemeGenerator from './MemeGenerator';
import Header from './Header';

function Index(params) {
    return (
        <div>
            <Header />
            <MemeGenerator />
        </div>
    )
}

export default Index;