const db = require('../database/connections');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    async create(req, res) {
        try {
            const { nome, email, senha, tipo = 'cliente' } = req.body;

            const senhaHash = await bcrypt.hash(senha, 10);

            await db('usuarios').insert({ nome, email, senha: senhaHash, tipo });
            return res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao cadastrar usuário' });
        }
    },

    async login(req, res) {
        try {
            const { email, senha } = req.body;

            const usuario = await db('usuarios').where({ email }).first();
            if (!usuario) {
                return res.status(401).json({ error: 'Email ou senha inválidos' });
            }

            const senhaValida = await bcrypt.compare(senha, usuario.senha);
            if (!senhaValida) {
                return res.status(401).json({ error: 'Email ou senha inválidos' });
            }

            const token = jwt.sign(
                { id: usuario.id, tipo: usuario.tipo },
                process.env.JWT_SECRET,
                { expiresIn: '8h' }
            );

            return res.json({ token, tipo: usuario.tipo });
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao fazer login' });
        }
    }
};