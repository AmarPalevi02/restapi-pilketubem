const categoriesBEM = require('../api/v1/categoriesBEM/model')
const { BadRequestError } = require('../errors')

const createBEM = async (req) => {
    const {
        name,
        imageId,
        about,
        visi
    } = req.body

    const result = await categoriesBEM.create({
        name,
        imageId,
        about,
        visi
    })

    return result
}

const showAll = async () => {
    const result = await categoriesBEM.findAll()

    return result
}

const deletBEM = async (req) => {
    const { id } = req.params

    const result = await categoriesBEM.destroy({
        where: {
            id: id
            // admin: req.user.admi
        }
    })

    if (!result) throw new BadRequestError(`Tidak ada categori dengan id : ${id}`)

    return result
}

module.exports = {
    createBEM,
    showAll,
    deletBEM
}