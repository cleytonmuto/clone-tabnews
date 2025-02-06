'use strict';

import { Client } from 'pg';

const query = async (queryObject) => {
  const client = new Client({
    host: 'localhost',
    port: 5433,
    user: 'postgres',
    database: 'postgres',
    password: 'local_password'
  });
  await client.connect();
  const res = await client.query(queryObject);
  await client.end();
  return res;
}

export default {
  query: query
};