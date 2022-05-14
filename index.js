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

const nomesMedicos = (medico) => {
  if (medico.genero === 'masculino') {
    const masculino = {
      nome: 'Dr. ' + medico.nome + ' ' + medico.sobrenome,
    };
  } else if (medico.genero === 'feminino') {
    const feminino = {
      nome: 'Dr(a). ' + medico.nome + ' ' + medico.sobrenome,
    };
  } else {
    const naoBinario = {
      nome: 'Dr(e). ' + medico.nome + ' ' + medico.sobrenome,
    };
  }
};

const medicoss = 