import { Pontuacao } from "../src/score-board"


describe("Pontuacao",()=>{

    const pontuacao = new Pontuacao()
  

    test("Deve retornar 3 pontos pro time A e 3 para o time B",()=>{
        pontuacao.pontuacaoTimeA3()
        pontuacao.pontuacaoTimeB3()
        let response = pontuacao.getPontuacao()
        expect(response).toBe("003:003")
    })

    test("Caso os dois times possuam pontos maiores que 999, os pontos não irão retornar",()=>{
        pontuacao.timeA = 1000;
        pontuacao.timeB = 1000;
        let response = pontuacao.getPontuacao()
        expect(response).toBe("Não retorna se estiver acima de 999")
    })
}) 
