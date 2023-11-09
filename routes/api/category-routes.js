const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll ({
      include:[{ model: Product}],
    });
    res.json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product}],
    });
    res.json(categoryData)
  } catch (error) {
   res.status(500).json(error);
  }
});

router.post('/', async(req, res) => {
  try {
   const newCategory = await Category.create(req.body);
   res.json(newCategory);
  } catch (error) {
   res.status(500).json(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
   const categoryData = await Category.update(req.body,{
    where: {
      id: req.params.id,
    },
   });
  res.json(categoryData);
  } catch (error) {
   res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
   const categoryData = await Category.destroy({
    where: {
      id:req.params.id,
    },
   });
   res.json(categoryData);
  } catch (error) {
   res.status(500).json(error);
  }
});

module.exports = router;
