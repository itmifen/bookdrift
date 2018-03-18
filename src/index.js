import React from 'react';
import { render } from 'react-dom'
import WeUI from 'react-weui';

import 'weui';
import 'react-weui/build/packages/react-weui.css';




import BDTab from './component/tab';
import BDDetail from './component/detail';
import BDAbout from './component/about';
import App from './component/app';

import  './bdstyle.css';


const root = document.getElementById("container")

render(<App />, root)



if (module.hot) {  
    module.hot.accept()  
}





