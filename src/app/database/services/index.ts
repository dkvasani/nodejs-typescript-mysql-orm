import BlogServices from "./blogServices";
import UserServices from "./userServices";

import DBConfig from "../config";

/**
 * DB configuration init
 */
new DBConfig();

const Blog = new BlogServices();
const User = new UserServices();

const Service = {
  Blog,
  User
};

export default Service;