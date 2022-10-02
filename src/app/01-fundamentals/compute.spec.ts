import { compute } from './compute';

describe('compute', () => {

    it('Deberia retornar 0 si es negativo', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    })

    it('debera incrementar el input si es positivo', ()=> {
        const result = compute(1);
        expect(result).toBe(2);
    })
})