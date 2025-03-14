import React, { useState, useEffect } from 'react';

function App() {
  const [nota, setNota] = useState(null);
  const [numero, setNumero] = useState(null);
  const [opcao, setOpcao] = useState('');
  const [contador, setContador] = useState(0);
  const [entrada, setEntrada] = useState('');

  useEffect(() => {
    console.log("Olá, Mundo!"); // Exercício 1.1
    alert("Olá, Mundo!"); // Exercício 1.2
  }, []);

  // Função para exercício 3.1
  const calcularStatus = () => {
    if (nota >= 8) {
      return "Aprovado";
    } else if (nota >= 4 && nota < 8) {
      return "Recuperação";
    } else {
      return "Reprovado";
    }
  };

  // Função para exercício 3.2
  const verificarParOuImpar = () => {
    return numero % 2 === 0 ? "Par" : "Ímpar";
  };

  // Função para exercício 4.2
  const gerarTabuada = () => {
    let tabuada = [];
    for (let i = 1; i <= 10; i++) {
      tabuada.push(`${numero} x ${i} = ${numero * i}`);
    }
    return tabuada;
  };

  // Função para exercício 5.3
  const verificarNumero = (num) => {
    if (num > 0) return "Positivo";
    else if (num < 0) return "Negativo";
    else return "Zero";
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Exercícios de JavaScript no React</h1>
      <hr />

      {/* Exercício 1 */}
      <section>
        <h2>1. Olá Mundo e Soma de Números</h2>
        <p><strong>Mensagem no Console:</strong> "Olá, Mundo!"</p>
        <p><strong>Alerta:</strong> "Olá, Mundo!"</p>
        <p><strong>Soma de Números:</strong> {5 + 10}</p>
      </section>
      <hr />

      {/* Exercício 2 */}
      <section>
        <h2>2. Variáveis e Tipos de Dados</h2>
        <p><strong>Tipo de Nome:</strong> {typeof "João"}</p>
        <p><strong>Tipo de Idade:</strong> {typeof 25}</p>
        <p><strong>Tipo de Matrícula:</strong> {typeof true}</p>
        <input
          type="text"
          placeholder="Digite um número"
          onChange={(e) => setNumero(parseInt(e.target.value))}
        />
        <p><strong>O número digitado é: {numero}</strong></p>
      </section>
      <hr />

      {/* Exercício 3 */}
      <section>
        <h2>3. Operadores e Estruturas Condicionais</h2>
        
        <div>
          <input
            type="number"
            placeholder="Digite sua nota"
            onChange={(e) => setNota(parseFloat(e.target.value))}
          />
          <p>Status: {nota !== null ? calcularStatus() : ''}</p>
        </div>
        
        <div>
          <input
            type="number"
            placeholder="Digite um número"
            onChange={(e) => setNumero(parseInt(e.target.value))}
          />
          <p>{numero !== null ? `O número é: ${verificarParOuImpar()}` : ''}</p>
        </div>
        
        <div>
          <select onChange={(e) => setOpcao(e.target.value)}>
            <option value="">Selecione uma opção</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
          <p>{opcao && `Você escolheu a opção ${opcao}`}</p>
        </div>
      </section>
      <hr />

      {/* Exercício 4 */}
      <section>
        <h2>4. Laços de Repetição</h2>
        <p><strong>Contagem de 1 a 10:</strong></p>
        <div>
          {[...Array(10).keys()].map((i) => (
            <p key={i}>{i + 1}</p>
          ))}
        </div>
        
        <div>
          <input
            type="number"
            placeholder="Digite um número para a tabuada"
            onChange={(e) => setNumero(parseInt(e.target.value))}
          />
          <p><strong>Tabuada de {numero}:</strong></p>
          <ul>
            {numero !== null &&
              gerarTabuada().map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      </section>
      <hr />

      {/* Exercício 5 */}
      <section>
        <h2>5. Funções em JavaScript</h2>
        <div>
          <input
            type="number"
            placeholder="Digite um número"
            onChange={(e) => setEntrada(parseInt(e.target.value))}
          />
          <p>{entrada !== null ? `O número é: ${verificarNumero(entrada)}` : ''}</p>
        </div>
      </section>
      <hr />

      {/* Exercício 6 - Manipulação do DOM */}
      <section>
        <h2>6. Manipulação do DOM</h2>
        <div>
          <button onClick={() => (document.title = "Novo Título da Página")}>
            Alterar Título da Página
          </button>
        </div>
        <div>
          <button onClick={() => (document.getElementById("paragrafo").style.color = "blue")}>
            Alterar Cor do Parágrafo
          </button>
          <p id="paragrafo">Este é um parágrafo.</p>
        </div>
      </section>
      <hr />

      {/* Exercício 7 - Contador */}
      <section>
        <h2>7. Criando um Contador de Cliques</h2>
        <p>Contagem: {contador}</p>
        <button onClick={() => setContador(contador + 1)}>Clique aqui</button>
        <button onClick={() => setContador(0)}>Zerar Contador</button>
      </section>
    </div>
  );
}

export default App;
