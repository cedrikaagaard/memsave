import keys from "./keys";

export default {
    type: "postgres",
    host: keys.pgHost,
    port: keys.pgPort,
    username: keys.pgUser,
    password: keys.pgPassword,
    database: keys.pgDatabase,
    entities: ["./src/models/*.ts"],
    synchronize: true
}