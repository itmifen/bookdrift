import React from 'react';
import ReactDOM from 'react-dom';
import WeUI from 'react-weui';


const {
    Panel, PanelHeader, PanelBody, PanelFooter, CellMore
    
} = WeUI;

import BDBookItem from '../component/bookitem';

export default class BDOrder extends React.Component {
    render(){
        let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6]

        return(
            <Panel>
            <PanelBody>

                {

                    items.map((item, i) => {

                        return (
                            <BDBookItem  key={i}  history={this.props.history} />
                        )
                    })
                }


            </PanelBody>
        </Panel>
        );

    }
}