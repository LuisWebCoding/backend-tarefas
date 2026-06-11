const TaskModel = require('../models/taskModel');

module.exports = {
    index: (req, res) => {
        TaskModel.getAllTasks((err, tasks) => {
            if (err) return res.status(500).json({ error: 'Erro ao buscar tarefas' });
            res.json(tasks);
        });
    },
    
    create: (req, res) => {
        const { title } = req.body;
        if (!title) return res.status(400).json({ error: 'Título é obrigatório' });
        
        TaskModel.createTask(title, (err, newTask) => {
            if (err) return res.status(500).json({ error: 'Erro ao criar tarefa' });
            res.status(201).json(newTask);
        });
    },

    update: (req, res) => {
        const { id } = req.params;
        const { title, completed } = req.body;
        
        TaskModel.updateTask(id, title, completed, (err, updatedTask) => {
            if (err) return res.status(500).json({ error: 'Erro ao atualizar tarefa' });
            res.json(updatedTask);
        });
    },

    delete: (req, res) => {
        const { id } = req.params;
        
        TaskModel.deleteTask(id, (err, changes) => {
            if (err) return res.status(500).json({ error: 'Erro ao deletar tarefa' });
            if (changes === 0) return res.status(404).json({ error: 'Tarefa não encontrada' });
            res.status(204).send();
        });
    }
};