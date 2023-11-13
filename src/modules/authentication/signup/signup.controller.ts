import { SignUpService } from './signup.service';
import { Controller, Get } from '@nestjs/common/decorators';

@Controller('signup')
export class SignUpController {
  constructor(private readonly signUpService: SignUpService) {}
  @Get()
  getSignup() {
    return this.signUpService.signup();
  }
}
