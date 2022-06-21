import BlogServices from "./blogServices";

import DBConfig from "../config";

/**
 * DB configuration init
 */
new DBConfig();

const Blog = new BlogServices();

const Service = {
  Blog,
};

export default Service;