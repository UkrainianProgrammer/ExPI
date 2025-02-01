import { Request, Response, NextFunction, Router } from "express";
import { HTTPClientError, HTTP404Error } from "../utils/httpErrors";

const handle404Error = (router: Router) => {
    router.use((req: Request, res: Response) => {
        throw new HTTP404Error("Page not found");
    });
};