import { currencies } from './currencies'

describe( 'getCurrencies', () => {
    it('should return the supported currencies', () => {
        const result = currencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    })
})