# Módulo 1.1 — Introdução ao JavaScript

Documentação de apoio e resumo teórico referente à seção **1.1 (Introduction to JavaScript)**.

---

## 📌 Sumário

- [1.1.1 Introdução](https://www.google.com/search?q=%23111-introdu%C3%A7%C3%A3o)
- [1.1.2 Como nos Comunicamos com o Computador](https://www.google.com/search?q=%23112-como-nos-comunicamos-com-o-computador)
- [1.1.3 JavaScript como uma Linguagem Interpretada](https://www.google.com/search?q=%23113-javascript-como-uma-linguagem-interpretada)
- [1.1.4 Um Pouco mais sobre o JavaScript](https://www.google.com/search?q=%23114-um-pouco-mais-sobre-o-javascript)
- [1.1.5 Client-side vs Server-side](https://www.google.com/search?q=%23115-client-side-vs-server-side)
- [1.1.6 Desvantagens e Limitações](https://www.google.com/search?q=%23116-desvantagens-e-limita%C3%A7%C3%B5es)
- [1.1.7 Vantagens da Linguagem](https://www.google.com/search?q=%23117-vantagens-da-linguagem)
- [1.1.8 Preparando-se para o Trabalho](https://www.google.com/search?q=%23118-preparando-se-para-o-trabalho)

---

## 1.1.1 Introdução

Aprender JavaScript é uma jornada para entender como criar, ler e manter aplicações modernas. As habilidades adquiridas nesta linguagem abrem portas para diversas oportunidades de carreira em um mercado de TI em constante expansão.

---

## 1.1.2 Como nos Comunicamos com o Computador

Os computadores executam tarefas com velocidade e precisão incomparáveis, mas dependem de instruções claras e inequívocas para funcionar.

- **Linguagens de Máquina:** Instruções numéricas de baixo nível diretamente interpretadas pelo hardware (incompreensíveis para leitura humana direta).
- **Linguagens de Programação:** Criadas para intermediar a comunicação humana com o hardware, aproximando-se da linguagem natural.
- **Níveis de Abstração:** Quanto maior o nível de abstração da linguagem, menos o programador precisa conhecer sobre os detalhes físicos do hardware.

---

## 1.1.3 JavaScript como uma Linguagem Interpretada

O JavaScript é tradicionalmente uma linguagem **interpretada** de **alto nível**.

### Ambientes de Execução

- **Navegadores Web:** Utilizam motores (_engines_) internos para interpretar o código dinamicamente ao carregar páginas.
- **Node.js:** Ambiente de execução instalado diretamente no sistema operacional (Windows, macOS, Linux), permitindo rodar aplicações fora do navegador (como servidores).

### Compilação JIT (Just-In-Time)

Os motores modernos de JavaScript utilizam a técnica de **JIT Compilation**, compilando trechos de código em tempo de execução para otimizar a performance sem alterar a experiência de interpretação linha por linha.

---

## 1.1.4 Um Pouco mais sobre o JavaScript

Criado em **1995 por Brendan Eich** na _Netscape_ (inicialmente chamado de LiveScript), o JavaScript nasceu para adicionar dinamicidade e interatividade às páginas web estáticas.

---

## 1.1.5 Client-side vs Server-side

### Client-Side (No Navegador)

- Código executado diretamente na máquina do usuário final.
- Responsável pela interatividade, manipulação do DOM e dinâmica visual.
- Suportado por 100% dos navegadores modernos (presente em ~95% da web global).
- Ecossistema rico com _frameworks_ de grande porte (**React**, **Angular**, **Vue**).

### Server-Side (No Servidor)

- Com a evolução da linguagem e o surgimento do **Node.js**, o JavaScript passou a ser utilizado no _back-end_.
- Utilizado para processamento de dados, APIs, banco de dados, aplicativos móveis e até programação de dispositivos como _drones_ (UAVs).

---

## 1.1.6 Desvantagens e Limitações

| Limitação                        | Descrição                                                                                                                         |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Baixa Performance Matemática** | Não é recomendado para cálculos matemáticos intensivos ou sistemas de altíssimo desempenho.                                       |
| **Sandbox de Segurança**         | No navegador, o script é isolado e não pode acessar arquivos ou recursos locais do sistema do usuário.                            |
| **Visibilidade do Código**       | O código _client-side_ é exposto no navegador. Ferramentas de _obfuscation_ apenas dificultam a leitura, mas não impedem a cópia. |

---

## 1.1.7 Vantagens da Linguagem

- **Comunidade Ativa:** Suporte massivo, documentação vasta e ecossistema com bibliotecas para quase qualquer necessidade.
- **Ferramentas Integradas:** Não exige ambientes pagos; as ferramentas de desenvolvimento (_DevTools_) já vêm embutidas nos navegadores.
- **Tipagem Dinâmica:** Permite alterar o tipo de dado de uma variável em tempo de execução.

  > _Nota:_ Essa flexibilidade levou à criação do **TypeScript**, que adiciona tipagem estática para quem busca maior controle de tipos em projetos grandes.

- **Fácil Aprendizado:** Sintaxe flexível e amigável para quem está começando na programação.

---

## 1.1.8 Preparando-se para o Trabalho

Independentemente do ambiente onde o código será executado (Navegador ou Node.js), a **base do JavaScript** permanece a mesma. Os conceitos fundamentais abordados ao longo do curso incluem:

1. Declaração de Variáveis (`let`, `const`, `var`)
2. Funções e Escopos
3. Estruturas Condicionais (`if`, `else`, `switch`)
4. Laços de Repetição (`for`, `while`)
