const db = require('../database');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    getAllTasks: (callback) => {
        db.all('SELECT * FROM tasks', [], (err, rows) => {
            // Converte o completed de 0/1 (do SQLite) para booleano
            const tasks = rows ? rows.map(t => ({ ...t, completed: t.completed === 1 })) : [];
            callback(err, tasks);
        });
    },
    
    createTask: (title, callback) => {
        const id = uuidv4();
        db.run('INSERT INTO tasks (id, title, completed) VALUES (?, ?, ?)', [id, title, 0], function(err) {
            callback(err, { id, title, completed: false });
        });
    },
    
    updateTask: (id, title, completed, callback) => {
        const isCompleted = completed ? 1 : 0;
        db.run('UPDATE tasks SET title = ?, completed = ? WHERE id = ?', [title, isCompleted, id], function(err) {
            callback(err, { id, title, completed });
        });
    },
    
    deleteTask: (id, callback) => {
        db.run('DELETE FROM tasks WHERE id = ?', [id], function(err) {
            // this.changes retorna quantas linhas foram afetadas
            callback(err, this.changes);
        });
    }
};