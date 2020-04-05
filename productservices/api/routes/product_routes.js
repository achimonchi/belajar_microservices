const express = require('express');

const router = express.Router();

const {
    productFindAll,
    productFindByID,
    productSave,
    productPatch,
    productDelete,
} = require('./../controllers/product_controller');

router.get('/', productFindAll);
router.get('/:id', productFindByID);
router.post('/', productSave);
router.patch('/:id', productPatch);
router.delete('/:id', productDelete);

module.exports = router;