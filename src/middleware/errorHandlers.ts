import { Request, Response, NextFunction, Router } from "express";
import { HTTPClientError, HTTP404Error } from "../utils/httpErrors";

const handle404Error = (router: Router) => {
    router.use((req: Request, res: Response) => {
        throw new HTTP404Error("Page not found");
    });
};

const handleClientError = (router: Router) => {
    router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        if (err instanceof HTTPClientError) {
            res.status(err.status).send({ error: err.message });
        } else {
            next(err);
        }
    });
}

const handleServerErrors = (router: Router) => {
    router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        console.log(err);
        if (process.env.NODE_ENV !== 'production') {
            res.status(500).send({ error: "Internal Server Error" });
        } else {
            res.status(500).send(err.stack);
        }
    });
}

export default [handle404Error, handleClientError, handleServerErrors];