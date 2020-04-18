export class Config {
    static port = Number(process.env.PORT) || 8080;
    static serviceUrl = process.env.SERVICE_URL;
}