
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



export default class BDLogin extends React.Component {

    login() {
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
                </Form>
                <ButtonArea>
                    <Button onClick={this.login.bind(this) }>登录</Button>
                </ButtonArea>
                <Toast icon="success-no-circle" show={this.state.showToast}>登录成功</Toast>                
                <div className="regdiv" onClick={this.clickHandle.bind(this, '/reg') }>新用户注册</div>
            </Page>
        )
    }
}
