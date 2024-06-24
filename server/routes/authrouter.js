import { Router } from 'express';
import { stats, status } from '../controllers/AppController';

const AuthController = require('../controllers/AuthController');

const router = Router();

router.get('/status', status);
router.get('/stats', stats);
// router.get('/signup', AuthController.signupGet);
router.post('/signup', AuthController.signupPost);
// router.get('/login', AuthController.loginGet);
router.post('/login', AuthController.loginPost);

module.exports = router;
