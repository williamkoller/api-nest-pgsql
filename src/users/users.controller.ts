import { Body, Controller, Post } from '@nestjs/common'
import { CreateUserDto } from './dto/create.user.dto'
import { ReturnUserDto } from './dto/return.user.dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post()
  async createAdminUser(@Body() createUserDto: CreateUserDto): Promise<ReturnUserDto> {
    const { name, email, password, passwordConfirmation } = createUserDto

    const user = await this.userService.createAdminUser({
      name,
      email,
      password,
      passwordConfirmation,
    })
    return {
      user,
      message: 'Admin user created successfully',
    }
  }
}
