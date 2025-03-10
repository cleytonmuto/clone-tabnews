'use strict';

import { Client } from 'pg';

const query = async (queryObject) => {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD
  });
  await client.connect();
  try {
    const res = await client.query(queryObject);
    return res;
  } catch (err) {
    console.log(err);
  } finally {
    await client.end();
  }
}

export default {
  query: query
};