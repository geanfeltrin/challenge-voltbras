# Review Notes

Salve Gean, tudo bem?!

Sou o Vinícius e vai ser um prazer fazer o code review do seu projeto de desafio da @voltbras!

Ficamos muito felizes e agradecemos muito pela sua disponibilidade e comprometimento ao realizar nosso desafio, valeuzão! :hugs:

Vou fazer um review parecido com o que fazemos normalmente no dia-a-dia aqui da empresa, porém com as observações em forma de **comentários no código.**

Qualquer dúvida pode adicionar um comentário aqui nesse pull request mesmo, ou pode falar com o Carlos ou o Henke que eles tem meu contato!

---

### Considerações gerais

Parabéns! Seu código ficou muito bom, de verdade! Você realmente colocou carinho e dedicação nesse projeto, muito massa mesmo!

Seu README ficou muito bem detalhado, parabéns pela atenção, show de bola!

Você utilizou docker e isso é bem legal, deu pra ver também que se preocupou em formatação e linting, o que é muito daora também.

Muito massa você ter escrito testes unitários também, no dia a dia isso é essencial, parabéns!

Excelente você ter usado Typescript, utilizamos ele em todos os projetos Node/React aqui na empresa.
Porém, apesar de ter usado Typescript você não conseguiu tirar um bom proveito das features que ele provém, muito poucos tipos declarados não ajudaram muito :/
Typescript é uma ferramenta poderosíssima e pode te trazer grandes benefícios, só colocar o .ts no fim do arquivo não vai ajudar muito. Uma das ferramentas que mais facilitam nossa vida aqui na empresa ao usar graphql é a lib [graphql-code-generator](https://graphql-code-generator.com/), ela é uma baita mão na roda graças ao Typescript.
Mas valeu a intenção de usar Typescript, era um extra e você cumpriu, show de bola!

Tive uns probleminhas pra rodar o projeto com o docker, acho que algumas coisas poderiam estar com uns valores default mais settados seilá. Mas consegui rodar tranquilo.

Acho que em alguns pontos você pecou em separar as responsabilidades e em manter as coisas simples, dai entra um pouco dos principios SOLID e KISS mas, de verdade, seu projeto ficou muito bom!
