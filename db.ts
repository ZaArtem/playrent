import { Surreal } from 'surrealdb.js';

const db = new Surreal();
await db.connect('ws://195.112.108.82:8761/rpc');

await db.signin({
    user: 'vnlab',
    pass: 'rjfdLPS4ksXcUBYR',
});

await db.use({
    ns: 'default',
    db: 'playrent',
});

export default db;
