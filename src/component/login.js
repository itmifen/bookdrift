
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
    ButtonArea

} = WeUI;



export default class BDLogin extends React.Component {

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
                    <Button>登录</Button>
                </ButtonArea>
            </Page>
        )
    }
}
