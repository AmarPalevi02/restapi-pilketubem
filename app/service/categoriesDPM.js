const categoriesDPM = require('../api/v1/categoriesDPM/model')

const createDPM = async (req) => {
    const {
        name,
        imageId,
        about,
        visi
    } = req.body

    const result = await categoriesDPM.create({
        name,
        imageId,
        about,
        visi
    })

    return result
}

const showAll = async() => {
    const result = await categoriesDPM.findAll() 

    return result
}

module.exports = {
    createDPM,
    showAll
}