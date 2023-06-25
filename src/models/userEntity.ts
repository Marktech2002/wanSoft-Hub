import  { Entity , PrimaryGeneratedColumn , CreateDateColumn, Column , OneToMany , BeforeInsert , BeforeUpdate } from "typeorm" ;
import { IsEmail } from "class-validator";
import { Song } from "../models/songEntity";
import { Ratings } from "../models/songRatingsEntity";

@Entity()
export class User {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   firstName: string;

   @Column()
   secondName: string;

//    @Column()
//    city: string;

   @Column({ unique: true })
   @IsEmail()
   email: string;

   @Column()
   password: string ;

   @Column({default : "normaluser"})
   role: string ;

   @BeforeInsert()
   @BeforeUpdate()
   normalizeRole() {
    const validRoles = ['normaluser', 'admin'];
    if (!validRoles.includes(this.role)) {
      this.role = 'normaluser';
    }
  }

  @OneToMany(() => Song, song => song.user)
  songs: Song[];

  @OneToMany(() => Ratings, rating => rating.user)
  ratings: Ratings[];

  @CreateDateColumn()
  createdAt: Date;

//   @OneToMany(() => Message, message => message.sender)
//   sentMessages: Message[];

//   @OneToMany(() => Message, message => message.receiver)
//   receivedMessages: Message[];
}