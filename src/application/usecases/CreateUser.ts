import { User } from "../../domain/entities/User";
import { UserRepository } from "../../repository/UserRepository";

export class CreateUser {
    constructor(private userRepository: UserRepository) {}
    async execute(user: User): Promise<User> {
        return this.userRepository.create(user);
    }
}
/* 
    Aqui estamos aplicando o princípio Dependency Inversion (D) do SOLID, pois o CreateUser 
    depende de uma abstração (UserRepository) e não de uma implementação concreta.
 */