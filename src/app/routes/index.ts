import { Request, Response, Application } from "express";
import BlogControllers from "../controllers/blogControllers";

import { middlewares } from "../middlewares/index";

const { responses, messages, codes } = middlewares;

const Blog = new BlogControllers();

/**
 * @author Dharmesh Vasani
 */
class Routes {
  /**
   * @author Dharmesh Vasani
   * @param app
   */
  public router = (app: Application): any => {
    app.get("/", (req: Request, res: Response) => {
      responses.ok(codes.ok(), messages.welcomeMessage(), res);
    });

    app.get("/blogs", Blog.findBlogs);
    app.get("/blogs/:blog_id", Blog.findOneBlog);
    app.post("/create", Blog.createBlog);
    app.put("/update/:blog_id", Blog.updateBlog);
    app.delete("/delete/:blog_id", Blog.deleteBlog);

    app.all("*", (req: Request, res: Response) => {
      responses.ok(codes.notFound(), messages.pageNotFound(), res);
    });
  };
}

export const route = new Routes().router;
