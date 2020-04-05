const express = require('express');

const {
    userFindAll,
    userFindInActive,
    userFindByID,
    userFindByEmail,
    userSave,
    userPatch,
    userDelete,
} = require('./../controllers/user_controller')

const router = express.Router();

router.get('/', userFindAll);
router.get('/type/inactive', userFindInActive);
router.get('/:id', userFindByID);
router.post('/search/email', userFindByEmail);
router.post('/', userSave);
router.patch('/:id', userPatch);
router.delete('/:id', userDelete);

module.exports = router;