import { Entity , Column , PrimaryGeneratedColumn ,CreateDateColumn , ManyToOne , OneToMany } from "typeorm";
import { User } from "../models/userEntity";
import { Ratings } from "../models/songRatingsEntity";

@Entity() 
export class Song {
    @PrimaryGeneratedColumn()
    id: number ;

    @Column()
    title: string;

    @Column({type: 'text'}) 
    lyrics : string;
    
    @ManyToOne(() => User, user => user.songs) 
    user: User ;

    @OneToMany(() => Ratings, rating => rating.song)
    ratings: Ratings[];

    @CreateDateColumn()
    createdAt: Date;
} 