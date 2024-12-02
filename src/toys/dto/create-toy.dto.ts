import { IsIn, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

const materials = ["wood", "metal", "plastic", "other"]

export class CreateToyDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(materials)
  material: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  weight: number;

  @IsNotEmpty()
  @IsNumber()
  childId: number;
}
