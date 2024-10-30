import { DataSource } from "typeorm";
import { envs } from '../../config/envs'; 
export const AppDataSource = new DataSource({
    type: "postgres",
    url: envs.DATABASE_URL, 
    synchronize: true,
    logging: true,
    entities: [
        "src/data/postgres/entities/*.ts",
        "dist/data/postgres/entities/*.js"
    ],
    migrations: ["src/data/postgres/migrations/**/*.ts"],
});

export const initializeAppDataSource = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Conexión a PostgreSQL establecida correctamente");
    } catch (error) {
        console.error("Error al conectar con la base de datos PostgreSQL:", error);
        process.exit(1); 
    }
};
