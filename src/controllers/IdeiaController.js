const axios = require('axios');
const Ideia = require('../models/Ideia');
//const parseStringAsArray = require('../utils/parseStringAsarray').default;


module.exports = {

    async index(request, response) {
        const ideias = await Ideia.find();
        return response.json(ideias);
    },

    async store(request, response) {
        const {title, description, areas} = request.body;

        const areasArray = areas.split(',').map(area => area.trim());
        
        ideia = await Ideia.create({
            title,
            description,
            areas: areasArray
        })

        return response.json(ideia);
    }
};
