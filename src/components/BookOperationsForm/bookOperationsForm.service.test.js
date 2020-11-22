import { priceFormatter, priceParser } from './bookOperationsForm.service';

describe('BookOperationsForm Service', () => {
    describe('priceFormatter', () => {
        it('should format zero', () => {
            const actual = priceFormatter(0);
            expect(actual).toBe('$ 0');
        });

        it('should format a number that is less than 1000, no thousand separator is expected', () => {
            const actual = priceFormatter(384.12);
            expect(actual).toBe('$ 384.12');
        });
    
        it('should format a number in the thousands range', () => {
            const actual = priceFormatter(1255.1);
            expect(actual).toBe('$ 1,255.1');
        });
    
        it('should format a number in the million range', () => {
            const actual = priceFormatter(3415333);
            expect(actual).toBe('$ 3,415,333');
        });
    });

    describe('priceParser', () => {
        it('should parse zero', () => {
            const actual = priceParser('$ 0');
            expect(actual).toBe('0');
        });

        it('should parse a formatted number that is less than 1000', () => {
            const actual = priceParser('$ 384.12');
            expect(actual).toBe('384.12');
        });
    
        it('should parse a formatted number in the thousands range', () => {
            const actual = priceParser('$ 1,255.1');
            expect(actual).toBe('1255.1');
        });
    
        it('should parse a formatted number in the million range', () => {
            const actual = priceParser('$ 3,415,333');
            expect(actual).toBe('3415333');
        });
    });
});
