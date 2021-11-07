# Won Games Client

## Stacks

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)

## Backend do projeto

[Won Games API](https://github.com/vczb/won-games-api)

## Iniciando

Adicione as variáveis de ambiente

```
NEXT_PUBLIC_API_URL=
NEXTAUTH_URL=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
NEXT_PUBLIC_IMAGE_HOST=
NEXT_PUBLIC_GA_TRACKING=
```

Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Comandos

- `dev`: executa a aplicação em modo desenvolvimento `localhost:3000`
- `build`: cria a versão de produção
- `start`: executa a versão de produção
- `lint`: executa o linter em todos os componentes e páginas
- `test`: executa testes em todos os componentes e páginas
- `test:watch`: executa o jest em modo de observação
- `storybook`: carrega o history book no endereço  `localhost:6006`
- `build-storybook`: cria versão do history book para produção
