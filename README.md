# Gerador de Rifas Personalizável

Um gerador de rifas personalizável desenvolvido com HTML, CSS e JavaScript puro, que permite criar rifas com diferentes layouts e configurações.

## Funcionalidades

- Três layouts diferentes: Simples, Moderno e Elegante
- Configuração personalizada da quantidade de números
- Campos editáveis para:
  - Nome da rifa
  - Prêmio
  - Valor por número
  - Data do sorteio
  - Nome do organizador
- Seleção de números por clique
- Exportação para PDF
- Impressão direta

## Como Usar

1. Abra o arquivo `index.html` em um navegador web
2. Preencha os campos do formulário com as informações da rifa
3. Selecione o layout desejado
4. Clique em "Gerar Rifa"
5. Para marcar números, clique sobre eles
6. Use os botões "Imprimir" ou "Salvar PDF" para exportar a rifa

## Estrutura do Projeto

```
gerador-rifas/
├── index.html
├── styles/
│   ├── main.css
│   └── layouts.css
├── scripts/
│   ├── main.js
│   └── layouts.js
└── README.md
```

## Requisitos

- Navegador web moderno com suporte a JavaScript ES6+
- Conexão com internet (para carregar a biblioteca html2pdf.js)

## Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis CSS e Grid)
- JavaScript (ES6+)
- html2pdf.js para exportação de PDF

## Personalização

Os layouts podem ser personalizados editando os arquivos CSS:

- `styles/main.css`: Estilos globais
- `styles/layouts.css`: Estilos específicos para cada layout

## Contribuição

Sinta-se à vontade para contribuir com o projeto através de pull requests ou reportando issues.

## Licença

Este projeto está sob a licença MIT.