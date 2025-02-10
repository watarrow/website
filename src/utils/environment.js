const ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT;

export const isLocal = () => ENVIRONMENT === "local";
export const isStaging = () => ENVIRONMENT === "staging";
export const isProd = () => ENVIRONMENT === "production";
