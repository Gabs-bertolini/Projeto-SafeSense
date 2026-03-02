import { Controller, Post, Body } from '@nestjs/common';
import { userService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: userService) {}
    @Post()
    create(@Body() user: any) {
        return this.userService.create(user);
    }

}
