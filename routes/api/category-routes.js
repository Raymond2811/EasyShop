const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll ({
      include:[{ model: Product}],
    });
    res.status.json(categoryData);
  } catch (error) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product}],
    });
    res.status.json(categoryData)
  } catch (error) {
   console.log(error);
  }
});

router.post('/', async(req, res) => {
  // create a new category
  try {
   const newCategory = await Category.create({
    category_name: req.body.category_name,
   });
   res.status.json(newCategory);
  } catch (error) {
   console.log(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
   const categoryData = await Category.update(req.body,{
    where: {
      id: req.params.id,
    },
   });
  res.status.json(categoryData);
  } catch (error) {
   console.log(error);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
   const categoryData = await Category.destroy({
    where: {
      id:req.params.id,
    },
   });
   res.status.json(categoryData);
  } catch (error) {
   console.log(error);
  }
});

module.exports = router;
