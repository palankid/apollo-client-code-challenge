import { debounce } from './execution.utils';

describe('Exectuion Utils', () => {
    jest.useFakeTimers();

    afterEach(() => {
        jest.clearAllTimers();
    });

    it('should call the debounced function initially then trigger the callback' +
       ' 50ms after the debounced function call', () => {
        const callback = jest.fn();
        const debouncedFn = debounce(callback, 50);
        
        debouncedFn();

        expect(callback).not.toHaveBeenCalled();

        jest.advanceTimersByTime(50);

        expect(callback).toHaveBeenCalled();
    });

    it('should call the debounced function repeatedly within the 50ms threshold and' +
       ' only trigger the callback when the debounced function was not called for at least 50ms', () => {
        const callback = jest.fn();
        const debouncedFn = debounce(callback, 50);
        
        debouncedFn();
        expect(callback).not.toHaveBeenCalled();

        jest.advanceTimersByTime(40);

        debouncedFn();
        expect(callback).not.toHaveBeenCalled();

        jest.advanceTimersByTime(40);

        debouncedFn();
        expect(callback).not.toHaveBeenCalled();

        jest.advanceTimersByTime(50);

        expect(callback).toHaveBeenCalled();
    });
});
