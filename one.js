const { Pool } = require('pg');
const { Container } = require('js-data');
const { SqlAdapter } = require('js-data-sql');

/* const config = {
  port:     5433,
  host:     'localhost',
  user:     'userdb',
  password: 'Password1',
  database: 'billboard',
} */

const store = new Container();
const adapter = new SqlAdapter({
  knexOpts: {
    client:     'postgres',
    connection: {
      user:     'userdb',
      password: 'Password1',
      host:     'localhost',
      port:     5433,
      database: 'billboard'
    },
    pool: {
      min: 0,
      max: 10
    }
  }
});

store.registerAdapter('postgres', adapter, { 'default': true });
store.defineMapper('user', {
  table: 'users'
});

async function get_hits() {
  const response = await store.findAll('user');
  console.log(response);
}

get_hits();
