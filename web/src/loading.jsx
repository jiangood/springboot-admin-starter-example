import React from "react";
import {Spin} from "antd";
import {ThemeUtils} from '@jiangood/springboot-admin-starter';

export default class extends React.Component {
    render() {
        return <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                background: ThemeUtils.getColor("background-color")
            }}>
            <Spin size='large'/>
        </div>
    }
}
