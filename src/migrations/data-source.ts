import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../models/userEntity";
import { Song } from "../models/songEntity";
import { Ratings } from "../models/songRatingsEntity";


export const AppDataSource = new DataSource({
    type: "mysql",
    host: " 127.0.0.1",
    username: "root",
    password: "password",
    database: "wanSoftHub",
    synchronize: true,
    logging: true,
    entities: [User, Song, Ratings],
    subscribers: [],
    migrations: [],
})  