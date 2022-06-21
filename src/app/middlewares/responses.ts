import { Response } from "express";
/**
 * @author Dharmesh Vasani
 */
class Res {
  /**
   * @author Dharmesh Vasani
   * @param status
   * @param message
   * @param data
   * @param res
   * @memberof Res
   * @returns
   */

  public success = (
    status: number,
    message: string,
    data: object,
    res: Response
  ) => {
    return res.status(status).json({ status, message, data });
  };

  /**
   * @author Dharmesh Vasani
   * @param status
   * @param message
   * @param res
   * @memberof Res
   * @returns
   */
  public ok = (status: number, message: string, res: Response) => {
    return res.status(status).json({
      status,
      message,
    });
  };

  /**
   * @author Dharmesh Vasani
   * @param status
   * @param message
   * @param res
   * @memberof Res
   * @returns
   */
  public error = (status: number, message: string, res: Response) => {
    return res.status(status).json({
      status,
      message,
    });
  };
}

export default Res;
