 
import stringCalculator from "../src/string-calculator"; 

describe("Calculador de string", ()=>{

    const NumerosStringSem1000 = "1,2,999"
    const Com1000 = "1,2,999,1000,2000"
    const numeronegativo = "1,2,999,-1"
    test("Soma das strings",()=>{
        const valor = stringCalculator(NumerosStringSem1000)
        expect(valor).toBe(1002);
    })
    test("Soma das strings ignorando o 1000",()=>{
        const valor = stringCalculator(Com1000)
        expect(valor).toBe(1002);
    })
    test("Soma das strings dispara erro com numero negativo",()=>{
        const valor = stringCalculator(numeronegativo)
        expect(valor).toBe(undefined);
    })
});
