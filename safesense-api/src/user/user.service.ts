import { Injectable } from '@nestjs/common';

@Injectable()
export class userService {
    private users = [];
    create(user: any) {
        return {
            message: 'Usuário criado com sucesso',
            data: user,
        };
    }
    findAll() {
        return this.users;
    }
}
