import { Router } from 'express';
import { stats, status } from '../controllers/AppController';
import AuthController from '../controllers/AuthController';

const router = Router();

router.get('/status', status);
router.get('/stats', stats);
router.post('/signup', AuthController.signupPost);
router.get('/logout', AuthController.logout);
router.post('/login', AuthController.loginPost);

export default router;
