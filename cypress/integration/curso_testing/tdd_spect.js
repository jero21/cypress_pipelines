let suma = (a,b) => {
    return a + b
}

describe('Test Unitario para módulo de cálculos', () => {
    context('Suma números positivos', () => {
        it('Debe sumar 2 números naturales', ()=> {
            expect(suma(3,5)).to.eq(8)
        })
    });
})
