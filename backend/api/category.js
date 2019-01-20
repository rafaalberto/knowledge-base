module.exports = app=> {
    const { existsOrError, notExistsOrError } = app.api.validation

    const save = (req, res) => {
        const category = {  
            id: req.body.id,
            name: req.body.name,
            parentId: req.body.parentId
        }
        if(req.params.id) category.id = req.params.id

        try {
            existsOrError(category.name, 'Nome não informado')
        } catch (msg) {
            return res.status(400).send(msg)
        }

        if(category.id) {
            app.db('categories')
                .update(category)
                .where({ id: category.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('categories')
                .insert(category)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async (req, res) => {
        try {
            const id = req.params.id
            existsOrError(id, 'Código da categoria não informado')
            
            const subCategory = await app.db('categories')
                .where({ parentId: id })
            
            notExistsOrError(subCategory, 'Categoria possui subcategorias')

            const articles = await app.db('articles')
                .where({ categoryId: id })
            notExistsOrError(articles, 'Categoria possui artigos')

            const rowsDeleted = await app.db('categories')
                .where({ id: id }).del()
            existsOrError(rowsDeleted, 'Categoria não foi encontrada')

            res.status(204).send()

        } catch (msg) {
            return res.status(400).send(msg)
        }
    }

    const withPath = categories => {
        const getParent = (categories, parentId) => {
            const parent = categories.filter(parent => parent.id === parentId)
            return parent.length ? parent[0] : null
        }

        const categoriesWithPath = categories.map(category => {
            let path = category.name
            let parent = getParent(categories, category.parentId)

            while(parent) {
                path = `${parent.name} > ${path}`
                parent = getParent(categories, parent.parentId)
            }

            return { ...category, path }
        })

        categoriesWithPath.sort((categoryX, categoryY) => {
            if(categoryX.path < categoryY.path) return -1
            if(categoryX.path > categoryY.path) return 1
            return 0
        })

        return categoriesWithPath
    }

    const get = (req, res) => {
        app.db('categories')
            .then(categories => res.status(200).json(withPath(categories)))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('categories')
            .where({ id: req.params.id })
            .first()
            .then(category => res.status(200).json(category))
            .catch(err => res.status(500).send(err))
    }

    return { save, remove, get, getById };
}