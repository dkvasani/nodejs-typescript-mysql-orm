import User from "../entity/user";

/**
 * @author Dharmesh Vasani
 */
class UserServices {
  /**
   * Find all blogs
   * @author Dharmesh Vasani
   * @param {}
   * @returns Promise
   */
   findUsers = async (): Promise<any | null> => {
    const result = await User.findAndCount();

    if (!result) {
      return null;
    }
    return result;
  };

  /**
   * Find one blog
   * @author Dharmesh Vasani
   * @param {}
   * @returns Promise
   */
  findOneBlog = async (user_id: number): Promise<any | null> => {
    const result = await User.findOne({ user_id });

    if (!result) {
      return null;
    }
    return result;
  };

  /**
   * Create a new user
   * @author Dharmesh Vasani
   * @param data
   * @returns Promise
   */
  createUser = async (data: object): Promise<any | null> => {
    const result = await User.insert(data);

    if (!result) {
      return null;
    }
    return result;
  };

  /**
   * Update a blog by Id
   * @author Dharmesh Vasani
   * @param data
   * @returns Promise
   */
  updateBlog = async (user_id: number, data: object): Promise<any | null> => {
    const result = await User.update(user_id, data);

    if (!result) {
      return null;
    }
    return result;
  };

  /**
   * Delete a blog by Id
   * @author Dharmesh Vasani
   * @param data
   * @returns Promise
   */
  deleteBlog = async (user_id: number): Promise<any | null> => {
    const result = await User.delete({ user_id });

    if (!result) {
      return null;
    }
    return result;
  };
}

export default UserServices;
