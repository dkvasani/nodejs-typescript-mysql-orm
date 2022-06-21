import { createConnection } from "typeorm";

import entities from "./entity/index";

import * as dotenv from "dotenv";

const { Blog, User } = entities;

dotenv.config();

const { DB_USER_DEV, DB_PASSWORD_DEV, DB_NAME_DEV, DB_HOST_DEV } = process.env;

/**
 * @JohnBashombe
 */
class DBConfig {
  /**
   * @constructor
   * @author Dharmesh Vasani
   * @since 0.001
   *
   * @param {}
   */
  constructor() {
    this.dbConfig();
  }

  /**
   * @author Dharmesh Vasani
   * @param {}
   * @returns createConnection
   */
  dbConfig = () => {
    // console.log("Database config initiated...");
    return createConnection({
      type: "mysql",
      database: DB_NAME_DEV,
      username: DB_USER_DEV,
      password: DB_PASSWORD_DEV,
      host: DB_HOST_DEV,
      entities: [Blog, User],
      logging: false,
      synchronize: true,
    });
  };
}

export default DBConfig;
