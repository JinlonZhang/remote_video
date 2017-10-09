console.log('console.log-----test');
import React from 'react';
import {render} from 'react-dom';

import Router from './router';
// const Router = () => {
//   return <div>root</div>;
// };

render(
    <Router />, document.getElementById('root')
);
