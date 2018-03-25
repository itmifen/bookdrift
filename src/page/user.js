import React from 'react';
import ReactDOM from 'react-dom';
import WeUI from 'react-weui';


// import { hot } from 'react-hot-loader'


const {Tab, TabBarItem, Article, SearchBar, TabBar, TabBarLabel, TabBody,
    Panel, PanelHeader, PanelBody, PanelFooter, CellMore,
    MediaBox, MediaBoxHeader, MediaBoxBody, MediaBoxTitle, MediaBoxDescription,
    CellsTitle, Cells,
    Cell,
    CellBody,
    CellFooter,
    CellHeader,
    iconSrc,
    Badge,
    TabBarIcon
} = WeUI;


import IconHome from '../img/home.png';
import IconUser from '../img/user.png';

import Book1 from '../img/book1.jpg';
import Book2 from '../img/book2.jpg';



import {
    Link, Redirect
} from 'react-router-dom'


import 'weui';
import 'react-weui/build/packages/react-weui.css';

import BDDetail from './detail';

export default class BDTab extends React.Component {


    constructor() {
        super();
    }



    clickHandle(url) {
        this.props.history.push(url)
    }


    render() {
        let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6]

        return (
            <Tab>
                <TabBody>
                    <div>
                        <Cells>

                            <Cell onClick={this.clickHandle.bind(this, '/login') }>
                                <CellHeader style={{ position: 'relative', marginRight: '10px' }}>
                                    <img src={IconUser} style={{ width: '50px', display: 'block' }} />

                                </CellHeader>
                                <CellBody>
                                    <p>光头强</p>
                                    <p style={{ fontSize: '13px', color: '#888888' }}>欢迎来到图书漂流！</p>
                                </CellBody>
                            </Cell>


                            <Cell  access onClick={this.clickHandle.bind(this, '/order') }>
                            <CellBody>
                             订单 <Badge preset="body">8</Badge>
                            </CellBody>
                            <CellFooter/>
                        </Cell>
                            <Cell  access onClick={this.clickHandle.bind(this, '/order') }>
                                <CellBody>
                                    发出的申请 <Badge preset="body">8</Badge>
                                </CellBody>
                                <CellFooter/>
                            </Cell>
                            <Cell  access onClick={this.clickHandle.bind(this, '/order') }>
                                <CellBody>
                                    收到的申请 <Badge preset="body">8</Badge>
                                </CellBody>
                                <CellFooter/>
                            </Cell>
                            <Cell access onClick={this.clickHandle.bind(this, '/order') }>
                                <CellBody>
                                    收藏
                                </CellBody>
                                <CellFooter/>
                            </Cell>
                            <Cell access onClick={this.clickHandle.bind(this, '/address') }>
                                <CellBody>
                                    地址
                                </CellBody>
                                <CellFooter/>
                            </Cell>
                        </Cells>

                        <Cells>
                            <Cell access onClick={this.clickHandle.bind(this, '/about') }>

                                <CellBody>
                                    帮助
                                </CellBody>
                                <CellFooter/>

                            </Cell>
                            <CellFooter/>

                            <Cell access onClick={this.clickHandle.bind(this, '/about') }>
                                <CellBody>
                                    关于
                                </CellBody>
                                <CellFooter/>

                            </Cell>

                            <Cell>
                                <CellBody>
                                    版本
                                </CellBody>
                                <CellFooter>
                                    V2.2.1
                                </CellFooter>

                            </Cell>

                        </Cells>
                    </div>


                </TabBody>


                <TabBar>
                    <TabBarItem active={true} icon={<img src={IconHome}/>} label="书单"  active={false}
                    onClick={this.clickHandle.bind(this, '/') }/>

                    <TabBarItem icon={<img src={IconUser}/>} label="我"  active={true}
                    />
                </TabBar>
            </Tab>



        );
    }
};
