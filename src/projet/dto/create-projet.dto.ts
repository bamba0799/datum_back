import { Transform, Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString } from "class-validator";
import { MembreStruct } from "src/membre-struct/entities/membre-struct.entity";

export class CreateProjetDto {
        @IsNotEmpty()
        @IsString()
        libelleprojet:string
        @IsNotEmpty()
        @IsString()
        descprojet:string
        @IsNotEmpty()
        @Transform(({ value }) => new Date(value))
        @IsDate()
        dateDebut: Date
        @IsNotEmpty()
        @Transform(({ value }) => new Date(value))
        @IsDate()
        dateFin: Date
        @IsNotEmpty()
        @IsString()
        etatprojet:string
        @Type(() => MembreStruct)
        membreStruct:MembreStruct
}
