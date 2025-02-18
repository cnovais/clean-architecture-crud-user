import { Router } from "express";
import { UserController } from "../presentation/controllers/UserController";

const router = Router();
const userController = new UserController();

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *             example:
 *               name: João Silva
 *               email: joao.silva@example.com
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Erro na requisição
 */
router.post("/users", userController.create);

export default router;