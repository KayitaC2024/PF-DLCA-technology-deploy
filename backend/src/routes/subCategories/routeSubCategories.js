const {Router} = require ("express")
const getSubCategories = require ("../../handlers/subCategories/subCategoriesHandler")

const subCategories = Router()

subCategories.get("/", getSubCategories)

module.exports = subCategories