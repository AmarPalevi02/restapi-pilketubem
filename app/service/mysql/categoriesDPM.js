const { where } = require('sequelize')
const categoriesDPM = require('../../api/v1/categoriesDPM/model')
const { BadRequestError } = require('../../errors')

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

const showAll = async () => {
    const result = await categoriesDPM.findAll()

    return result
}

const deleteDPM = async (req) => {
    const { id } = req.params

    const result = await categoriesDPM.destroy()

    if (!result) throw new BadRequestError(`Tidak ada categori dengan id: ${id}`)

    return result
}

const updateDPM = async (req) => {
    const { id } = req.params
    const {
        name,
        imageId,
        about,
        visi
    } = req.body

    const check = await categoriesDPM.findByPk(id)

    if (!check) throw new BadRequestError(`Tidak ada categories dengan id: ${id}`)

    const result = await categoriesDPM.update({
        name,
        imageId,
        about,
        visi
    }, { where: { id: id } })

    return result
}

module.exports = {
    createDPM,
    showAll,
    deleteDPM,
    updateDPM
}