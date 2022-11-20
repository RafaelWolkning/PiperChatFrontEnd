import { Token } from "../token/Token";

export interface Session {
  id: number;
  login: string;
  character: string;
  motto: string;
  token: Token;
  rules: number[]
}
