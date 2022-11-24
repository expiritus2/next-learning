import mongoose from 'mongoose';

import Todo from './schemas/todo';
import User from './schemas/user';

const { DATABASE_URL, DATABASE_NAME } = process.env;

export const connectDb = async (dbName: string = DATABASE_NAME as string) => {
    const connection = await mongoose.connect(`${DATABASE_URL}` as string, { dbName }).catch((err) => console.log(err));
    return { connection, Todo, User };
};
