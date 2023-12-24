const categoriesBEM = require('../../api/v1/categoriesBEM/model')
const { BadRequestError } = require('../../errors')
const Image = require('../../api/v1/images/model')

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
    const result = await categoriesBEM.findAll({
        include: [
            Image
        ]
    })

    return result
}

const deletBEM = async (req) => {
    const { id } = req.params

    const result = await categoriesBEM.destroy({
        where: {
            id: id
        }
    })

    if (!result) throw new BadRequestError(`Tidak ada categori dengan id : ${id}`)

    return result
}

const updateBEM = async (req) => {
    const { id } = req.params
    const {
        name,
        imageId,
        about,
        visi
    } = req.body

    const check = await categoriesBEM.findByPk(id)

    if (!check) throw new BadRequestError(`Tidak ada categories dengan id: ${id}`)

    const result = await categoriesBEM.update({
        name,
        imageId,
        about,
        visi
    }, { where: { id: id } })

    return result
}

module.exports = {
    createBEM,
    showAll,
    deletBEM,
    updateBEM
}