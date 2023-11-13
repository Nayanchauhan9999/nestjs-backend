import { Injectable } from '@nestjs/common/decorators';

Injectable();
export class SignUpService {
  signup() {
    return {
      message: 'hellow',
    };
  }
}
