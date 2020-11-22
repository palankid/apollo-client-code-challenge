import React from 'react';
import { bool, string } from 'prop-types';

import { Spin, Space } from 'antd';

const LoadingMessage = ({ message, visible }) => {
    if (!visible) {
        return null;
    }

    return (
        <div className="loading-message">
            <Space size="middle">
                <Spin size="large" />
                <span className="loading-message__text">
                    { message }
                </span>
            </Space>
        </div>
    );
};

LoadingMessage.propTypes = {
    message: string.isRequired,
    visible: bool
};

LoadingMessage.defaultProps = {
    visible: true
};

export default LoadingMessage;
