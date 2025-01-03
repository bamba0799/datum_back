import { etatprojetEnum } from "generique/etatprojetEnum.enum"
import { MembreStruct } from "src/membre-struct/entities/membre-struct.entity"
import { Projet } from "src/projet/entities/projet.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"


@Entity('enquete')
export class Enquete {
    
        @PrimaryGeneratedColumn('uuid')
        idenquete : string
        @Column()
        libelleEnquete:string
        @Column()
        commentaireEnquete:string
        @Column({type:"date"})
        dateDebut: Date
        @Column({type:"date"})
        dateFin: Date
        @Column({
            type:"enum",
            enum:etatprojetEnum
    
        })
        etatEnquete:string
        @Column()
        nomStructure:string
    
        @ManyToOne(()=>MembreStruct,(membreStruct)=>membreStruct.enquete)
        membreStruct:MembreStruct

        @ManyToOne(()=>Projet,(membreStruct)=>membreStruct.enquete)
        projet:Projet

}
