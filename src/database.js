const sqlite3 = require('sqlite3').verbose();

// Cria ou conecta ao arquivo do banco de dados na raiz do backend
const db = new sqlite3.Database('./tarefas.db', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
        
        // Cria a tabela de tarefas se ela não existir
        db.run(`CREATE TABLE IF NOT EXISTS tasks (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            completed INTEGER DEFAULT 0
        )`);
    }
});

module.exports = db;