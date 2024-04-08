export interface DatabaseConfig {
    uri: string;
  }

export const databaseConfig: DatabaseConfig = {
    uri: process.env.MONGODB_URI,
  };
  