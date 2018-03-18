import React from 'react';
import WeUI from 'react-weui';

import srcArticle from './1.jpg';
import '../bdstyle.css';

const {Article, Page,
    Button, MediaBox,
    MediaBoxTitle,
    MediaBoxDescription,
    Panel,
    PanelHeader,
    PanelBody,
    ButtonArea
} = WeUI;



export default class BDDetail extends React.Component {

    render() {
        return (

            <Page infiniteLoader={false}>
                <div>
                    <img src={srcArticle} />
                </div>

            
                <Article>
                <div className='detailtitle'>浪潮之巅</div>
                <div className='detaildes'>
                            <div>
                                作者：熊大
                            </div>
                            <div>
                                出版社：青青草原出版社
                            </div>
                            <div>
                                出版时间：2017
                            </div>
                        </div>
                        <div className='line'></div>
                        <div className='detaildes'>简介</div>
                        <div>这里是简介，这里是这里是简介，这里是这里是简介，这里是这里是简介，这里是这里是简介，这里是这里是简介，这里是这里是简介，这里是这里是简介，这里是这里是简介，这里是</div>
                        
                        </Article>
                        <ButtonArea>
                        <Button>换书</Button>
                        </ButtonArea>
                       
                        
            </Page>
          

        )
    }
}
