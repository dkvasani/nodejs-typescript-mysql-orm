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
   * Find one user
   * @author Dharmesh Vasani
   * @param {}
   * @returns Promise
   */
  findOneUser = async (user_id: number): Promise<any | null> => {
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
   * Update a user by Id
   * @author Dharmesh Vasani
   * @param data
   * @returns Promise
   */
  updateUser = async (user_id: number, data: object): Promise<any | null> => {
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
  deleteUser = async (user_id: number): Promise<any | null> => {
    const result = await User.delete({ user_id });

    if (!result) {
      return null;
    }
    return result;
  };
}

export default UserServices;
