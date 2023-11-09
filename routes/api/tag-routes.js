const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
   const tagData = await Tag.findAll({
    include: [{model: Product, through:ProductTag}],
   });
   res.json(tagData);
  } catch (error) {
   res.status(500).json(error);
  }
});

router.get('/:id',async (req, res) => {
  try {
   const tagData = await Tag.findByPk(req.params.id,{
    include:[{model: Product, through:ProductTag}],
   });
   res.json(tagData);
  } catch (error) {
   res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  try {
   const tagData = await Tag.create(req.body);
   res.json(tagData);
  } catch (error) {
   res.status(500).json(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
   const tagData = await Tag.update(req.body,{
    where: {
      id:req.params.id,
    },
   });
  res.json(tagData);
  } catch (error) {
   res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
   const tagData = await Tag.destroy({
    where: {
      id:req.params.id,
    },
   });
   res.json(tagData);
  } catch (error) {
   res.status(500).json(error);
  }
});

module.exports = router;
