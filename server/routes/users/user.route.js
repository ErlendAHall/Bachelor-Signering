import express from 'express';
import validate from 'express-validation';
import userCtrl from '../../controllers/user.controller';
import paramValidation from './user.validation';

const router = express.Router();

router.route('/')
    .get(userCtrl.list)
    .post(validate(paramValidation.createUser), userCtrl.create);

router.route('/:userId')
    .get(userCtrl.get)
    .put(userCtrl.update)
    .delete(userCtrl.remove);

export default router;