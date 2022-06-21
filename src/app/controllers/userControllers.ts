import { Request, Response } from "express";
import { middlewares } from "../middlewares";

import Service from "../database/services";

const { responses, messages, codes } = middlewares;

const { User } = Service;
/**
 * @author Dharmesh Vasani
 */
class UserControllers {
  /**
   * Find all users
   * @author Dharmesh Vasani
   * @param req
   * @param res
   * @returns response
   */
  findBlogs = async (req: Request, res: Response) => {
    const response = await User.findUsers();

    if (!response) {
      return responses.error(codes.error(), messages.error(), res);
    }

    return responses.success(
      codes.ok(),
      messages.ok(),
      {
        count: response[1],
        data: response[0],
      },
      res
    );
  };

  /**
   * Find one blog
   * @author Dharmesh Vasani
   * @param req
   * @param res
   * @returns response
   */
  findOneBlog = async (req: Request, res: Response) => {
    const { blog_id } = req.params;

    const response = await User.findOneBlog(parseInt(blog_id));

    if (!response) {
      return responses.error(codes.error(), messages.notFound(), res);
    }

    return responses.success(codes.ok(), messages.ok(), response, res);
  };

  /**
   * Create a new blog
   * @author Dharmesh Vasani
   * @param req
   * @param res
   * @returns response
   */
  createUser = async (req: Request, res: Response) => {
    const {
        name,
        email,
        password,
        mobile_number
    }: {
      name: string;
      email: string;
      password: string;
      mobile_number: string;
    } = req.body;

    const response = await User.createUser({
      name,
      email,
      password,
      mobile_number,
    });

    if (!response) {
      return responses.error(codes.error(), messages.notFound(), res);
    }

    const user_id = response.raw.insertId;

    return responses.success(
      codes.created(),
      messages.created(),
      { user_id, email, name, password, mobile_number },
      res
    );
  };

  /**
   * Update one blog
   * @author Dharmesh Vasani
   * @param req
   * @param res
   * @returns response
   */
  updateBlog = async (req: Request, res: Response) => {
    const {
      title,
      description,
    }: {
      title: string;
      description: string;
    } = req.body;

    const { blog_id } = req.params;

    const response = await User.updateBlog(parseInt(blog_id), {
      title,
      description,
    });

    if (!response) {
      return responses.error(codes.error(), messages.error(), res);
    }

    return responses.success(
      codes.ok(),
      messages.ok(),
      { blog_id, title, description },
      res
    );
  };

  /**
   * Update one blog
   * @author Dharmesh Vasani
   * @param req
   * @param res
   * @returns response
   */
  deleteBlog = async (req: Request, res: Response) => {
    const { blog_id } = req.params;

    const response = await User.deleteBlog(parseInt(blog_id));

    if (!response) {
      return responses.error(codes.error(), messages.error(), res);
    }

    return responses.ok(codes.ok(), messages.ok(), res);
  };
}

export default UserControllers;
