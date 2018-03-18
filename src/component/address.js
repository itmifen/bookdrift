
import React from 'react';
import WeUI from 'react-weui';

import srcArticle from './1.jpg';

const {Article, Page,
    Button,
    CellsTitle,
    Form,
    FormCell,
    CellHeader,
    CellBody,
    Label,
    Input,
    CellFooter,
    VCode,
    vcodeSrc,
    ButtonArea,
    Panel,
    PanelHeader,
    PanelBody,
    MediaBox,
    MediaBoxTitle,
    MediaBoxDescription,
    PanelFooter,
    CellMore,
    Cell,
    Dialog,
    Toast

} = WeUI;




export default class BDAddress extends React.Component {


    state = {
        showToast: false,
        showConfirm: false,
        Confirm: {
            title: '确认删除',
            buttons: [
                {
                    type: 'default',
                    label: '取消',
                    onClick: this.hideDialog.bind(this)
                },
                {
                    type: 'primary',
                    label: '确认',
                    onClick: this.operate.bind(this)
                }
            ]
        }
    };

    operate(){
        console.log("删除地址");
        

        this.hideDialog();
        //Todo 操作成功

        this.setState({showToast: true});

        this.state.toastTimer = setTimeout(()=> {
            this.setState({showToast: false});
        }, 800);
        
    }

    hideDialog() {
        this.setState({
            showConfirm: false
        });
    }

    


    clickHandle(url) {
        this.props.history.push(url)
      }
    

    render() {


        return (
            <Page transition={true} >

            <Panel>
            <PanelHeader>
                地址
            </PanelHeader>
            <PanelBody>

               
            <MediaBox type="text">
            <MediaBoxTitle>熊二</MediaBoxTitle>
            <MediaBoxDescription>
                贵州省实盘水农家小院3990号
            </MediaBoxDescription>
           </MediaBox>
                
                <MediaBox type="text">
                    <MediaBoxTitle>熊二</MediaBoxTitle>
                    <MediaBoxDescription>
                        贵州省实盘水农家小院3990号
                    </MediaBoxDescription>
                </MediaBox>
            </PanelBody>
           
        </Panel>
        <ButtonArea>
        <Button onClick={this.clickHandle.bind(this, '/addressedit')}>新增地址</Button>
    </ButtonArea>

    <ButtonArea>
    <Button type="warn" onClick={ e=> this.setState({ showConfirm: true}) }>删除地址</Button>
</ButtonArea>


<Dialog type="ios" title={this.state.Confirm.title} buttons={this.state.Confirm.buttons} show={this.state.showConfirm}
>
确认要删除此地址吗？
</Dialog>
<Toast icon="success-no-circle" show={this.state.showToast}>操作成功</Toast>




            </Page>
        )
    }
}
