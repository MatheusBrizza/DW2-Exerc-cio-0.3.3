# node-ktztvf

Considere o objeto `medicos` declarado abaixo.

```jsx
const medicos = [
  {
    nome: 'Leticia',
    sobrenome: 'Costa',
    genero: 'feminino',
  },
  {
    nome: 'Adimaldo',
    sobrenome: 'Pinto',
    genero: 'masculino',
  },
  {
    nome: 'Noah',
    sobrenome: 'Lutus',
    genero: 'nao-binario',
  },
];a
```

Faça uma função que irá retornar um array de strings. Essa função deve formatar o nome do médico conforme o `genero`. Veja os templates abaixo. Use o map.

`nao-binario` Dr(e) `nome` + `sobrenome` \*

`masculino` Dr. `nome` + `sobrenome`

`feminino` Dr(a) `nome` + `sobrenome`

\*espero que esteja certo 🙏

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/node-ktztvf)
