import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import BookOperationsForm from './BookOperationsForm';

describe('BookOperationsForm', () => {
    describe('Create Mode', () => {
        const createComponent = () => {
            const handleFinish = jest.fn();
            const handleCancel = jest.fn();

            return {
                wrapper: mount(
                    <BookOperationsForm
                        initialValues={null}
                        isCreateMode={true}
                        loading={false}
                        disabled={false}
                        onFinish={handleFinish}
                        onCancel={handleCancel}
                    />
                ),
                handleFinish,
                handleCancel
            };
        };

        it('should verify that input fields are initially empty', () => {
            const { wrapper } = createComponent();
    
            const textIntputs = wrapper.find('Input input');
            const numericInput = wrapper.find('InputNumber input');

            expect(textIntputs.at(0).prop('value')).toBeFalsy();
            expect(textIntputs.at(1).prop('value')).toBeFalsy();
            expect(numericInput.prop('value')).toBe('$ ');
        });

        it('should verify that id input is not mounted', () => {
            const { wrapper } = createComponent();
    
            const idFormItem = wrapper.find('FormItem[name="id"]');
            expect(idFormItem.exists()).toBeFalsy();
        });

        it('should verify that onFinish is not called when Create button is clicked and required fields are empty', () => {
            const { wrapper, handleFinish } = createComponent();
    
            wrapper.find('Button button').at(0).simulate('submit');
            
            expect(handleFinish).not.toHaveBeenCalled();
        });
        
        it('should verify that onCancel is called when Cancel button is clicked', () => {
            const { wrapper, handleCancel } = createComponent();
    
            wrapper.find('Button button').at(1).simulate('click');
            
            expect(handleCancel).toHaveBeenCalled();
        });
    });

    describe('Edit Mode', () => {
        const createComponent = () => {
            const handleFinish = jest.fn();
            const handleCancel = jest.fn();

            return {
                wrapper: mount(
                    <BookOperationsForm
                        initialValues={{
                            id: 1,
                            title: 'Book Title',
                            author: 'Book Author',
                            price: 21.99
                        }}
                        isCreateMode={false}
                        loading={false}
                        disabled={false}
                        onFinish={handleFinish}
                        onCancel={handleCancel}
                    />
                ),
                handleFinish,
                handleCancel
            };
        };

        it('should verify that input fields are populated', () => {
            const { wrapper } = createComponent();
    
            const textIntputs = wrapper.find('Input input');
            const numericInput = wrapper.find('InputNumber input');

            expect(textIntputs.at(0).prop('value')).toBe(1);
            expect(textIntputs.at(1).prop('value')).toBe('Book Title');
            expect(textIntputs.at(2).prop('value')).toBe('Book Author');
            expect(numericInput.prop('value')).toBe('$ 21.99');
        });

        it('should verify that id input is mounted', () => {
            const { wrapper } = createComponent();
    
            const idFormItem = wrapper.find('FormItem[name="id"]');
            expect(idFormItem.exists()).toBeTruthy();
        });

        it('should verify that onFinish is called when Edit button is clicked and required fields are populated', (done) => {
            const { wrapper, handleFinish } = createComponent();
    
            act(() => {
                wrapper.find('Button button').at(0).simulate('submit');
            });
            
            setTimeout(() => {
                expect(handleFinish).toHaveBeenCalled(); 
                done();
            }, 0);
        });

        it('should verify that onCancel is called when Cancel button is clicked', () => {
            const { wrapper, handleCancel } = createComponent();
    
            wrapper.find('Button button').at(1).simulate('click');
            
            expect(handleCancel).toHaveBeenCalled();
        });
    });
});
