import { Router, Request, Response, NextFunction } from "express";

type Wrapper = (( router: Router ) => void)