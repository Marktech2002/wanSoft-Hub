import  { Entity , PrimaryGeneratedColumn , Column , OneToMany , BeforeInsert , BeforeUpdate} from "typeorm" ;

@Entity()
export class User {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   firstName: string;

   @Column()
   secondName: string;

   @Column()
   email: string;

   @Column()
   password: string ;

   @Column({default : "User"})
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

  @OneToMany(() => Message, message => message.sender)
  sentMessages: Message[];

  @OneToMany(() => Message, message => message.receiver)
  receivedMessages: Message[];
}