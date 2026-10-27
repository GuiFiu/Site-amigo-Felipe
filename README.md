# soma. — esboço de loja virtual

Uma página inicial responsiva para uma loja que ainda está começando. O nome **soma.**, os textos e as imagens são sugestões e podem ser trocados pela identidade da sua loja.

## Como abrir

O site é feito com HTML, CSS e JavaScript, sem dependências de instalação. Abra o arquivo `index.html` no navegador ou, para usar um servidor local, execute na pasta do projeto:

```bash
python3 -m http.server 8000
```

Depois, acesse `http://localhost:8000`.

## O que já está no esboço

- Página inicial com apresentação, vitrine, história e área de novidades.
- Layout adaptado para celular, tablet e computador.
- Busca e sacola com estados vazios, já que ainda não há produtos.
- Espaços visuais reservados para produtos futuros, sem preços fictícios.
- Formulário de novidades demonstrativo: **não envia nem armazena e-mails**.

Para vender de verdade, ainda será necessário cadastrar produtos e integrar serviços de pagamento, entrega e, se desejado, o cadastro de e-mails.

## Personalização

- `index.html`: nome, textos, navegação e espaços da vitrine.
- `styles.css`: cores, fontes, espaçamentos e adaptações para telas menores.
- `script.js`: menu, busca, sacola e comportamento demonstrativo do formulário.
- `assets/`: imagens, ícone e fontes locais. As licenças das fontes estão em `assets/fonts/`.
