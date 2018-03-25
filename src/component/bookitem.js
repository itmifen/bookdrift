import React from 'react';
import ReactDOM from 'react-dom';
import WeUI from 'react-weui';

const {
    MediaBox, MediaBoxHeader, MediaBoxBody, MediaBoxTitle, MediaBoxDescription,
    
} = WeUI;


import Book1 from '../img/book1.jpg';
import Book2 from '../img/book2.jpg';

import {
    Link, Redirect
} from 'react-router-dom'

export default class BDBookitemComponent extends React.Component{

    constructor() {
        super();
    }


    clickHandle(url) {
        this.props.history.push(url)
    }

    render() {
        return (
        <MediaBox  type="appmsg" onClick={this.clickHandle.bind(this, '/detail')} >
        <MediaBoxHeader><img src={Book1} /></MediaBoxHeader>
        <MediaBoxBody>
            <MediaBoxTitle> 浪潮之巅 </MediaBoxTitle>
            <MediaBoxDescription>
                一本颠覆人们对信息时代的认识、对创新和创业的理解的好书。作者吴军通过介绍硅谷成功的秘诀，揭示了信息时代的特点和方法论。
            </MediaBoxDescription>
        </MediaBoxBody>
        </MediaBox>
        );
    }
}
