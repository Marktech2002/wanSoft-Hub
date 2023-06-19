import { Entity , PrimaryGeneratedColumn , CreateDateColumn , Column , ManyToOne } from "typeorm";
import { Song } from "../models/songEntity";
import { User } from "../models/userEntity";

@Entity()
export class Ratings {
    @PrimaryGeneratedColumn()
    id: number ;

    @Column() 
    value: number ;

    @ManyToOne(()=> User , user => user.ratings)
    user: User ; 

    @ManyToOne(() => Song, song => song.ratings)
    song: Song;

    @CreateDateColumn()
    createdAt: Date;

}