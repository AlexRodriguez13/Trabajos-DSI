import {ApiProperty} from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({required: true, example: 'usuario@empresa.com'})
email: string;
@ApiProperty({required: true, example: 'Jhon Doe'})
name: string;


@ApiProperty({required: true, example: 'pasword123'})
password: string;


}

