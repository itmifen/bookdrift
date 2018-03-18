
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
    TextArea,
    Toast

} = WeUI;



export default class BDAddressEdit extends React.Component {


    componentWillUnmount() {
        this.state.toastTimer && clearTimeout(this.state.toastTimer);
        this.state.loadingTimer && clearTimeout(this.state.loadingTimer);
    }

    showToast() {
        this.setState({showToast: true});

        this.state.toastTimer = setTimeout(()=> {
            this.setState({showToast: false});
            this.clickHandle("/address")
        }, 800);
    }

    clickHandle(url) {
        this.props.history.push(url)
      }
    



    state = {
        showToast: false,
    };

    render() {

        


        return (
            <Page transition={true} infiniteLoader={true} ptr={false}>

                <CellsTitle>地址</CellsTitle>
                <Form>
                    <FormCell>
                        <CellHeader>
                            <Label>联系人</Label>
                        </CellHeader>
                        <CellBody>
                            <Input  placeholder="请填写联系人"/>
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>手机号</Label>
                        </CellHeader>
                        <CellBody>
                            <Input  placeholder="请填写手机号"/>
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>城市</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="password" placeholder="请选择城市"/>
                        </CellBody>
                    </FormCell>
                </Form>
                <CellsTitle>详细地址</CellsTitle>
            <Form>
                <FormCell>
                    <CellBody>
                        <TextArea placeholder="请填写详细地址" rows="3"></TextArea>
                    </CellBody>
                </FormCell>
            </Form>
                <ButtonArea>
                    <Button onClick={this.showToast.bind(this)} >提交</Button>
                </ButtonArea>

                <Toast icon="success-no-circle" show={this.state.showToast}>操作成功</Toast>
          

            </Page>
        )
    }
}
