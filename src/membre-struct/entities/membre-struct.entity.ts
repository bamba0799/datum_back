import { roleMembreEnum } from "generique/rolemembre.enum";
import { Projet } from "src/projet/entities/projet.entity";
import { Structure } from "src/structure/entities/structure.entity";
import { UserEntity } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity("membrestruct")
export class 
MembreStruct extends UserEntity {

    @Column({
        type:"enum",
        enum:roleMembreEnum,
    })
    roleMembre:string


    @Column()
    nomStruct:string

   

    @ManyToOne(()=>Structure,(structure)=>structure.membres,{eager:true})
    structure:Structure;


    @ManyToOne(() => MembreStruct, (MembreStruct) => MembreStruct.subordonne, { nullable: true, onDelete: 'SET NULL' })
    superieur: MembreStruct;

  
    @OneToMany(() => MembreStruct, (MembreStruct) => MembreStruct.superieur)
    subordonne: MembreStruct[];

    @OneToMany(()=>Projet,(materiel)=>materiel.membreStruct,{eager:true})
    projet:Projet[]
}
