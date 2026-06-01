# Calculadora React

Uma calculadora interativa e responsiva desenvolvida com **React**, apresentando uma interface intuitiva e funcionalidades matemáticas essenciais. Este projeto foi criado com foco educacional para aprender os conceitos fundamentais de React, como componentes, estado e manipulação de eventos.

---

## Funcionalidades

- ✅ **Operações Básicas**: Adição, subtração, multiplicação e divisão
- ✅ **Display Digital**: Exibição clara dos números e resultados
- ✅ **Suporte a Decimais**: Cálculos com números decimais
- ✅ **Botão AC (All Clear)**: Limpa a memória e reseta a calculadora
- ✅ **Interface Responsiva**: Design adaptável para diferentes tamanhos de tela
- ✅ **Validações**: Previne erros como múltiplos pontos decimais e divisão por zero
- ✅ **Componentes Reutilizáveis**: Arquitetura modular com componentes bem definidos

---

## Requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 14 ou superior) - [Baixar aqui](https://nodejs.org/)
- **npm** (geralmente vem com Node.js)

Para verificar se estão instalados, execute:

```bash
node --version
npm --version
```

---

## Instalação

1. **Clone ou acesse o diretório do projeto:**

```bash
cd calculadora_react
```

2. **Instale as dependências:**

```bash
npm install
```

---

## Como Usar

### Iniciar o Servidor de Desenvolvimento

```bash
npm start
```

O aplicativo abrirá automaticamente em [http://localhost:3000](http://localhost:3000). A página será recarregada quando você fizer alterações nos arquivos.


## Estrutura do Projeto

```
calculadora_react/
├── public/
│   ├── index.html          # Arquivo HTML principal
│   └── favicon.ico
├── src/
│   ├── components/         # Componentes reutilizáveis
│   │   ├── Button.jsx      # Componente de botão
│   │   ├── Button.css      # Estilos do botão
│   │   ├── Display.jsx     # Componente de display
│   │   └── Display.css     # Estilos do display
│   ├── main/               # Componente principal
│   │   ├── Calculator.jsx  # Lógica da calculadora
│   │   └── Calculator.css  # Estilos da calculadora
│   ├── fonts/              # Fontes customizadas
│   ├── App.js              # Componente raiz
│   ├── App.css             # Estilos globais
│   ├── index.js            # Ponto de entrada
│   ├── index.css           # Estilos globais
│   └── reportWebVitals.js  # Métricas de performance
├── package.json            # Dependências e scripts
└── README.md               # Este arquivo
```

---

## Componentes

### **Calculator.jsx**
Componente principal que gerencia toda a lógica da calculadora.

**Recursos:**
- Gerencia o estado da aplicação (display, operação, valores armazenados)
- Controla as operações matemáticas
- Implementa validações de entrada
- Renderiza os botões e o display

**Estado:**
```javascript
{
  displayValue: '0',        // Valor exibido no display
  clearDisplay: false,      // Flag para limpar o display
  operation: null,          // Operação atual (+, -, *, /)
  values: [0, 0],          // Armazena os dois valores da operação
  current: 0                // Índice do valor atual (0 ou 1)
}
```

### **Button.jsx**
Componente reutilizável de botão com suporte a diferentes estilos.

**Props:**
- `label`: Texto exibido no botão
- `click`: Função de callback ao clicar
- `operation`: Flag para botões de operação
- `double`: Expande o botão para 2 colunas
- `triple`: Expande o botão para 3 colunas

### **Display.jsx**
Componente que exibe o valor atual da calculadora.

**Props:**
- `value`: Número ou resultado a ser exibido

---

## Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| **React** | ^19.2.6 | Biblioteca JavaScript para interfaces |
| **React DOM** | ^19.2.6 | Renderização de componentes React |
| **React Scripts** | 5.0.1 | Scripts de build e desenvolvimento |
| **Testing Library** | ^16.3.2 | Ferramentas para testes em React |

---

## Scripts Disponíveis

| Script | Comando | Descrição |
|--------|---------|-----------|
| Iniciar | `npm start` | Inicia o servidor de desenvolvimento |
| Build | `npm run build` | Cria a versão para produção |
| Testes | `npm test` | Executa os testes em modo watch |
| Eject | `npm run eject` | Expõe todas as configurações (⚠️ irreversível) |

---

## Como Funciona a Lógica

### Fluxo de Operação

1. **Entrada de Dígito**: Quando um número é clicado, ele é concatenado ao display
2. **Operação Selecionada**: Ao selecionar uma operação (+, -, *, /), o valor é armazenado
3. **Segundo Número**: O usuário digita o segundo número
4. **Resultado**: Ao clicar em =, o cálculo é realizado usando `eval()`
5. **Reset**: O AC limpa todo o estado da calculadora

### Validações Implementadas

- Impede múltiplos pontos decimais em um mesmo número
- Remove zeros à esquerda (ex: 0123 → 123)
- Trata erros matemáticos (divisão por zero, infinito)
- Valida resultados usando `isNaN()` e `isFinite()`

---

## Configuração de Ambiente

Este projeto foi bootstrapped com [Create React App](https://github.com/facebook/create-react-app), portanto suporta todas as funcionalidades do CRA.

Para mais informações sobre configuração avançada, acesse:
- [Documentação de Configuração Avançada](https://facebook.github.io/create-react-app/docs/advanced-configuration)
- [Guia de Deploy](https://facebook.github.io/create-react-app/docs/deployment)

---

## Recursos Educacionais

Este projeto é ideal para aprender:

- **Componentes React**: Estrutura e composição
- **State Management**: Uso de `setState()` em componentes de classe
- **Event Handling**: Manipulação de eventos do usuário
- **Componentes Funcionais vs Classes**: Ambos os padrões utilizados
- **CSS em React**: Importação e aplicação de estilos
- **Validação e Tratamento de Erros**: Lógica robusta

---

## Solução de Problemas

### A aplicação não inicia
```bash
# Limpe o cache e reinstale as dependências
rm -rf node_modules package-lock.json
npm install
npm start
```

### Porta 3000 já está em uso
```bash
# A aplicação usará automaticamente a próxima porta disponível
# Ou você pode especificar uma porta diferente
PORT=3001 npm start
```

### Erros de dependências
```bash
# Atualize as dependências
npm update
```

---

## Notas de Desenvolvimento

- O projeto utiliza **`eval()`** para cálculos matemáticos, o que é adequado para fins educacionais, mas não é recomendado para aplicações em produção. Para versões futuras, considere usar uma biblioteca como `math.js`.
- Os componentes utilizam **CSS Modules** para evitar conflitos de estilos globais.
- O estado é gerenciado com **React Hooks** (em componentes funcionais) e **Class Components** (em componentes de classe).

---

## Próximas Melhorias Sugeridas

- [ ] Adicionar histórico de operações
- [ ] Implementar temas (modo claro/escuro)
- [ ] Adicionar testes unitários completos
- [ ] Suportar teclado (digitar números diretamente)
- [ ] Adicionar funções científicas (raiz quadrada, potência, etc.)
- [ ] Melhorar acessibilidade (ARIA labels, navegação por teclado)
- [ ] Substituir `eval()` por um parser matemático seguro

---

## Licença

Este projeto é fornecido como está para fins educacionais.
Desenvolvido como parte do aprendizado de **React** e **JavaScript Moderno** do Curso Web Moderno (Cod3r).

---

## Autor
Deivid da Silva Galvão 

---

