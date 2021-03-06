import React from "react"
import "../static/style/components/header.css"
import {Row, Col,Menu, Icon} from "antd"

const Header  = () => (
    <div className="header">
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                <span className="header-logo">张永健</span>
                <span className="header-txt">专注吹牛逼，每年吹一百天</span>
            </Col>
            <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu>
                    <Menu.Item key="home">
                        <Icon type="home"/>
                        首页
                    </Menu.Item>
                </Menu>
                <Menu>
                    <Menu.Item key="video">
                        <Icon type="youtube"/>
                        视频
                    </Menu.Item>
                </Menu>
                <Menu>
                    <Menu.Item key="life">
                        <Icon type="smile"/>
                        生活
                    </Menu.Item>
                </Menu>

            </Col>
        </Row>
    </div>
)

export default Header
