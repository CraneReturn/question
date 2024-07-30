import { IsNotEmpty, IsString, Length } from 'class-validator';

export class SigninUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(6, 20, {
    message: `用户名长度必须在6-20之间，当前传递的值是：$value`,
  })
  username: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 32)
  password: string;
}
