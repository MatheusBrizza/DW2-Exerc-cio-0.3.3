// run `node index.js` in the terminal

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
];

const nomesMedicos = medicos.map((medico) => {
  if (medico.genero === 'masculino') {
    return 'Dr. ' + medico.nome + ' ' + medico.sobrenome;
  } else if (medico.genero === 'feminino') {
    return 'Dr(a). ' + medico.nome + ' ' + medico.sobrenome;
  }
  return 'Dr(e). ' + medico.nome + ' ' + medico.sobrenome;
});

console.log(nomesMedicos);
