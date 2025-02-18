import { Request, Response } from "express";
import { CreateUser } from "../../application/usecases/CreateUser"
import { MongoUserRepository } from "../../repository/MongoUserRepository";
import { User } from "../../domain/entities/User"

export class UserController {
    private createUser: CreateUser;

    constructor() {
        console.log("passou aqui")
        const userRepository = new MongoUserRepository();
        this.createUser = new CreateUser(userRepository);

        // Fixando o contexto do `this` com bind
        this.create = this.create.bind(this);
    }

    async create(req: Request, res: Response): Promise<void>{
        const user: User = req.body;
        try {
            const newUser = await this.createUser.execute(user);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json(error);
        }
    }
}

/*
Aqui estamos aplicando o princípio Single Responsibility (S) do SOLID, pois o UserController 
tem apenas uma responsabilidade: gerenciar as requisições HTTP relacionadas aos usuários.
*/