import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsDateString, IsNumber, IsString, MinLength, ValidateNested } from 'class-validator';

export class Item {
    @IsNumber({}, { message: 'El tipo de documento es obligatorio' })
    id: number;

    @IsString({ message: 'El numero es obligatorio' })
    @MinLength(5)
    numero: string;
}

export class PacienteCreateDto {
    @IsString({ message: 'Los nombres son obligatorios' })
    @MinLength(5, { message: 'Los nombres deben tener al menos 5 caracteres' })
    nombre: string;

    @IsString({ message: 'Los apellidos son obligatorios' })
    @MinLength(5, { message: 'Los apellidos deben tener al menos 5 caracteres' })
    apellido: string;

    @IsDateString({}, { message: 'La fecha de nacimiento es necesaria' })
    fecha_nacimiento: Date;

    @IsString({ message: 'La dirección es necesaria' })
    @MinLength(5, { message: 'La dirección debe tener al menos 5 caracteres' })
    direccion: string;

    @IsNumber({}, { message: 'El genero es necesario' })
    genero: number;

    @IsNumber({}, { message: 'El municipio es necesario' })
    municipio: number;

    @ArrayNotEmpty({ message: 'Debe tener al menos un documento' })
    //@ArrayMinSize(1, { message: 'Debe tener al menos un documento' })
    @ValidateNested({ each: true })
    @Type(() => Item)
    documentos: Item[];

    @ArrayNotEmpty({ message: 'Debe tener al menos un contacto' })
    //@ArrayMinSize(1, { message: 'Debe tener al menos un contacto' })
    @ValidateNested({ each: true })
    @Type(() => Item)
    contactos: Item[];
}
