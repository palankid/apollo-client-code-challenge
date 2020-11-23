import React from 'react';
import PropTypes from 'prop-types';
import {
    Form,
    Input,
    InputNumber,
    Button,
    Space
} from 'antd';

import { priceFormatter, priceParser } from './bookOperationsForm.service';
import {
    layout,
    tailLayout,
    requiredRule,
    numericRule
} from './bookOperationsForm.config';

const BookOperationsForm = ({
    initialValues,
    isCreateMode,
    loading,
    disabled,
    onFinish,
    onCancel
}) => {
    const [ form ] = Form.useForm();

    const primaryButtonLabel = isCreateMode ? 'Create' : 'Edit';

    return (
        <div className="book-operations-form">
            <Form
                {...layout}
                initialValues={initialValues}
                form={form}
                name="control-hooks"
                onFinish={onFinish}
            >
                {!isCreateMode && (
                    <Form.Item
                        name="id"
                        label="Id"
                    >
                        <Input disabled />
                    </Form.Item>
                )}
                <Form.Item
                    name="title"
                    label="Title"
                    rules={[requiredRule]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="author"
                    label="Author"
                    rules={[requiredRule]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="price"
                    label="Price"
                    rules={[requiredRule, numericRule]}
                >
                    <InputNumber
                        precision={2}
                        step={0.01}
                        formatter={priceFormatter}
                        parser={priceParser}
                    />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Space>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={loading}
                            disabled={disabled}
                        >
                            {primaryButtonLabel}
                        </Button>
                        <Button
                            htmlType="button"
                            onClick={onCancel}
                        >
                            Cancel
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    );
};

BookOperationsForm.propTypes = {
    initialValues: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        author: PropTypes.string,
        price: PropTypes.number
    }),
    isCreateMode: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onFinish: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
};

BookOperationsForm.defaultProps = {
    initialValues: null,
    isCreateMode: true,
    disabled: false,
    loading: false
};

export default BookOperationsForm;
