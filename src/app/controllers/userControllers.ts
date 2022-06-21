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
    findUsers = async (req: Request, res: Response) => {
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
     * Find one user
     * @author Dharmesh Vasani
     * @param req
     * @param res
     * @returns response
     */
    findOneUser = async (req: Request, res: Response) => {
        const { user_id } = req.params;

        const response = await User.findOneUser(parseInt(user_id));

        if (!response) {
            return responses.error(codes.error(), messages.notFound(), res);
        }

        return responses.success(codes.ok(), messages.ok(), response, res);
    };

    /**
     * Find one user
     * @author Dharmesh Vasani
     * @param req
     * @param res
     * @returns response
     */
     userLogin = async (req: Request, res: Response) => {
        const { user_id } = req.params;

        const response = await User.findOneUser(parseInt(user_id));

        if (!response) {
            return responses.error(codes.error(), messages.notFound(), res);
        }

        return responses.success(codes.ok(), messages.ok(), response, res);
    };

    /**
     * Create a new user
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
     * Update one user
     * @author Dharmesh Vasani
     * @param req
     * @param res
     * @returns response
     */
    updateUser = async (req: Request, res: Response) => {
        const {
            name,
            email,
            password,
            mobile_number,
        }: {
            name: string;
            email: string;
            password: string;
            mobile_number: string;
        } = req.body;

        const { user_id } = req.params;

        const response = await User.updateUser(parseInt(user_id), {
            name,
            email,
            password,
            mobile_number,
        });

        if (!response) {
            return responses.error(codes.error(), messages.error(), res);
        }

        return responses.success(
            codes.ok(),
            messages.ok(),
            {
                user_id,
                name,
                email,
                password,
                mobile_number,
            },
            res
        );
    };

    /**
     * Delte one user
     * @author Dharmesh Vasani
     * @param req
     * @param res
     * @returns response
     */
    deleteUser = async (req: Request, res: Response) => {
        const { user_id } = req.params;

        const response = await User.deleteUser(parseInt(user_id));

        if (!response) {
            return responses.error(codes.error(), messages.error(), res);
        }

        return responses.ok(codes.ok(), messages.ok(), res);
    };
}

export default UserControllers;
