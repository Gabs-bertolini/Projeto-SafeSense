import { Injectable } from '@nestjs/common';

@Injectable()
export class userService {

    create(user: any) {
        return {
            message: 'Usuário criado com sucesso',
            data: user,
        };
    }

}
