const express = require('express');

const {
    userFindAll,
    userFindInActive,
    userFindByID,
    userSave,
    userPatch,
    userDelete,
} = require('./../controllers/user_controller')

const router = express.Router();

router.get('/', userFindAll);
router.get('/type/inactive', userFindInActive);
router.get('/:id', userFindByID);
router.post('/', userSave);
router.patch('/:id', userPatch);
router.delete('/:id', userDelete);

module.exports = router;