'use strict';

const status = (req, res) => {
  res.status(200).json({ 'chave': 'Alunos do curso.dev são pessoas acima da média' });
}

export default status;