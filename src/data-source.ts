import { DataSource } from "typeorm";
import "dotenv/config";

const AppDataSource = new DataSource(
   {
          type: "postgres",
          host: process.env.HOST,
          port: 5432,
          username: process.env.POSTGRES_USER,
          password: process.env.POSTGRES_PASSWORD,
          database: process.env.POSTGRES_DB,
          logging: true,
          synchronize: false,
          entities: [`${__dirname}/**/entities/*.{ts,js}`],
          migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
        }
  );
  
  export default AppDataSource;