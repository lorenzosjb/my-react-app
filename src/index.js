import React from 'react';
import { render } from 'react-dom';
import HelloWorld from './HelloWorld';

render(
    <HelloWorld value={process.env.DB_PASS} />,
    document.getElementById('root')
);

