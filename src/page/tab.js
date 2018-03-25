import React from 'react';
import ReactDOM from 'react-dom';
import WeUI from 'react-weui';

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
import BDDetail from './detail';
import BDBookItem from '../component/bookitem';



import {
    Link, Redirect
} from 'react-router-dom'


import 'weui';
import 'react-weui/build/packages/react-weui.css';



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


                    <Panel>
                        <PanelBody>
                            <SearchBar placeholder="请输入您要查找的图书" lang={{ cancel: '取消' }} />

                            {

                                items.map((item, i) => {

                                    return (
                                        <BDBookItem  key={i}  history={this.props.history} />
                                    )
                                })
                            }


                        </PanelBody>
                    </Panel>
                </TabBody>


                <TabBar>
                    <TabBarItem active={true} icon={<img src={IconHome}/>} label="书单"  active={true}
                    />

                    <TabBarItem icon={<img src={IconUser}/>} label="我"  active={false}
                    onClick={this.clickHandle.bind(this, '/user') }/>
                </TabBar>
            </Tab>



        );
    }
};
