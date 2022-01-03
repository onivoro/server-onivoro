export interface IAuthConfig {
  secret: string;
  ignoreExpiration: boolean;
};

export const authConfig: IAuthConfig = {
  secret: process.env.AUTHSECRET as string,
  ignoreExpiration: process.env.AUTHIGNOREEXPIRATION === 'true'
};
