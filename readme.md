# 🔐 QR Code & Password Generator CLI

Uma aplicação simples em **Node.js** para gerar:

- **QR Codes no terminal**
- **senhas aleatórias personalizáveis**

Projeto ideal para praticar:

- modularização
- uso de variáveis de ambiente
- interação via terminal
- geração dinâmica de conteúdo com Node.js

---

## Funcionalidades

### Gerador de QR Code

Permite gerar um QR Code diretamente no terminal a partir de um link informado pelo usuário.

### Gerador de Senhas

Cria senhas aleatórias com base nas configurações definidas no arquivo `.env`, como:

- letras maiúsculas
- letras minúsculas
- números
- caracteres especiais
- tamanho da senha

---

## Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [prompt](https://www.npmjs.com/package/prompt)
- [chalk](https://www.npmjs.com/package/chalk)
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal)

---

## Estrutura do projeto

```bash
src/
├── prompt/
│   ├── prompt-main.js
│   └── prompt-qrcode.js
├── services/
│   ├── password/
│   │   ├── create.js
│   │   └── handle.js
│   └── qr-code/
│       ├── create.js
│       └── handle.js
└── index.js
```
## Como funciona

Ao executar o projeto, o terminal exibirá um menu principal com opções como:

- `1` → Gerar QR Code  
- `2` → Gerar senha  

---

## Exemplo de fluxo

### Gerando QR Code

O usuário escolhe a opção de QR Code, informa o link desejado e seleciona o tipo de exibição.

---

### Gerando senha

O sistema lê as regras do `.env` e gera uma senha aleatória com base nas opções habilitadas.

---

## Exemplo de senha gerada

Com essa configuração:

```env
UPPERCASE_LETTERS=false
LOWERCASE_LETTERS=true
NUMBERS=false
SPECIAL_CHARACTERS=false
LENGTH=8
```

## Exemplo de saída

```
kfjxmwqa
```

## Autor
Desenvolvido por Rômulo Zirbes