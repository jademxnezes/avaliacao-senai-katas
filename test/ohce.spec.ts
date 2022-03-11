import  {ohce}  from "../src/ohce";

describe('ohce',() =>{
    test('tem que retornar “Gostei da palavra!” quando o paramêntro for palíndromo', ()=> {
        expect(ohce('ovo')).toBe('Gostei da palavra!')
    })
    
    test('tem que retornar "asac" quando o palímetro for casa',
    ()=> {
        
        expect(ohce('casa')).toBe('asac')
    })
})
