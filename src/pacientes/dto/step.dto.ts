import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsBoolean,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class Item {
  @IsString({ message: 'Id pregunta es necesaria' })
  id: number;

  @IsString({ message: 'Codigo de la pregunta es necesaria' })
  codigo: number;

  @IsObject()
  @IsOptional()
  inputs: any;
}

export class StepCreateDto {
  @IsNumber({}, { message: 'Id es necesario que sea un numero' })
  @IsOptional()
  id: number;

  @IsBoolean({ message: 'Es necesario saber si es nuevo o no' })
  is_new: boolean;

  @IsNumber({}, { message: 'El paciente es obligatorio' })
  paciente_id: number;

  @IsNumber({}, { message: 'El paso es obligatorio' })
  step_id: number;

  @ArrayNotEmpty({ message: 'Debe tener al menos una pregunta' })
  @ValidateNested({ each: true })
  @Type(() => Item)
  preguntas: Item[];
}
