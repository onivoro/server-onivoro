import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { homedir } from 'os';
import { join } from 'path';
import { readFileSync } from 'fs';

export interface IDbConfig extends PostgresConnectionOptions {
  autoLoadEntities: boolean;
};

export const dbConfig: IDbConfig = {
  autoLoadEntities: true,
  database: process.env.DATABASE,
  host: process.env.DBHOST,
  port: +(process.env.DBPORT || 5432),
  username: process.env.DBUSERNAME,
  password: process.env.DBPASSWORD,
  synchronize: process.env.DBSYNC === 'true',
  type: 'postgres',
  namingStrategy: new SnakeNamingStrategy(),
  ssl: process.env.DBCERT
    ? { ca: readFileSync(join(homedir(), process.env.DBCERT), 'utf-8') }
    : undefined
};
