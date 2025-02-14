'use strict';

import database from "infra/database.js";

const status = async (req, res) => {
  const result = await database.query('SELECT 2 + 3;');
  console.log(result.rows);
  res.status(200).json({ 'chave': 'são acima da média' });
}

export default status;