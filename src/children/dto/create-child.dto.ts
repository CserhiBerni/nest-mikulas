import { IsNotEmpty, IsNumber, IsString, } from "class-validator";

export class CreateChildDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsNumber()
  behaved: boolean;
}
