import { User } from "../domain/entities/User"
import { UserRepository } from "./UserRepository"
import { UserModel } from "../infrastructure/database/models/UserModel"

export class MongoUserRepository implements UserRepository {
    async create(user: User): Promise<User> {
        const newUser = new UserModel(user);
        return newUser.save();
    }
}

/*
Aqui estamos aplicando o princípio Liskov Substitution (L) do SOLID, pois MongoUserRepository 
pode ser substituído por qualquer outra implementação de UserRepository.
*/