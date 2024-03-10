import { createContext } from "react";
import { IUser } from "../models";

export interface IContext {
  users: IUser[] | null;
}

export const SearchContext = createContext<IContext>({
  users: null,
});
