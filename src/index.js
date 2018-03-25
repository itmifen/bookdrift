import React from 'react';
import { render } from 'react-dom'
import WeUI from 'react-weui';

import 'weui';
import 'react-weui/build/packages/react-weui.css';




import BDTab from './page/tab';
import BDDetail from './page/detail';
import BDAbout from './page/about';
import App from './page/app';

import  './bdstyle.css';


const root = document.getElementById("container")

render(<App />, root)



if (module.hot) {  
    module.hot.accept()  
}





