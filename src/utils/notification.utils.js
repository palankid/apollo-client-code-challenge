import { notification } from 'antd';

export const handleErrorIfApplicable = error => {
    error && notification.error({
        message: 'Network Error',
        description: String(error),
    });
};
