import { IsString, MaxLength, MinLength } from 'class-validator';

export class LoginAuthDto {
  @IsString()
  @MinLength(7)
  @MaxLength(14)
  usuario: string;

  @IsString()
  @MinLength(7)
  @MaxLength(25)
  password: string;
}
