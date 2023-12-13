const Image = require('../../api/v1/images/model')
const { NotFoundError } = require('../../errors')

// Generate URL setelah submit
const generateUrlImage = async (req) => {
    const result = `uploads/${req.file.filename}`;
    return result;
}

const createImages = async (req) => {
    const result = await Image.create({
        fileName: req.file
            ? `uploads/${req.file.filename}`
            : `uploads/avatar/default.png`
    });

    return result;
}


const chekingImage = async (id) => {
    const result = await Image.findByPk(id);

    if (!result) throw new NotFoundError(`Tidak ada gambar dengan id : ${id}`);
}

module.exports = {
    createImages,
    generateUrlImage,
    chekingImage
};