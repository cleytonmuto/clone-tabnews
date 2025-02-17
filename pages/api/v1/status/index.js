'use strict';

import database from 'infra/database.js';

const status = async (req, res) => {
  const updatedAt = new Date().toISOString();

  // desafio
  const version = await database.query('SHOW server_version;');
  const formatVersion = version.rows[0].server_version;

  const maxConnections = await database.query('SHOW max_connections;');
  const formatMaxConnections = Number(maxConnections.rows[0].max_connections);

  const usedConnections = await database.query("SELECT COUNT(*) FROM pg_stat_activity WHERE state='active';");
  const formatUsedConnections = Number(usedConnections.rows[0].count);

  res.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: formatVersion,
        max_connections: formatMaxConnections,
        used_connections: formatUsedConnections
      }
    }
  });

}

export default status;