const connection = require('../database/connection');
const generateUniqueId = require ('../utils/generateUniqueId');


module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        
        return response.json(ongs)
    },

    async create(request, response) {  
        // Desestruturado, armazena cada coisa em uma variável e evita que o usuário mande algo que eu não pedi
        const { name, email, whatsapp, city, uf } = request.body;
        const id = generateUniqueId();
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        
        return response.json({ id });
    }
};