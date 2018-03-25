
import React from 'react';
import WeUI from 'react-weui';

import srcArticle from 'img/1.jpg';

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
    Toast

} = WeUI;



export default class BDReg extends React.Component {

    reg() {
        this.setState({showToast: true});

        this.state.toastTimer = setTimeout(()=> {
            this.setState({showToast: false});
            this.clickHandle("/user")
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

                <CellsTitle>登录</CellsTitle>
                <Form>
                    <FormCell>
                        <CellHeader>
                            <Label>用户名</Label>
                        </CellHeader>
                        <CellBody>
                            <Input  placeholder="请填写您的用户名"/>
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>密码</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="password" placeholder="请输入密码"/>
                        </CellBody>
                    </FormCell>
                    <FormCell>
                    <CellHeader>
                        <Label>确认密码</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type="password" placeholder="请再次输入密码"/>
                    </CellBody>
                </FormCell>
                </Form>
                <ButtonArea>
                    <Button onClick={this.reg.bind(this) }>注册</Button>
                </ButtonArea>
                <Toast icon="success-no-circle" show={this.state.showToast}>注册成功</Toast>                
                
                <div className="regdiv" onClick={this.clickHandle.bind(this, '/login') }>我有账号，直接登录。</div>
            </Page>
        )
    }
}
