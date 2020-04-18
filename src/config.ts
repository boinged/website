export class Config {
    static port = Number(process.env.PORT) || 8080;
    static serviceIP = process.env.SERVICE_IP;
}