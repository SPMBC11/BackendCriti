
import { Sequelize } from "sequelize";

const sequelize = new Sequelize("CritiChord", "postgres", "SPMBarcelona11", {
    port : 5432,
    host: "localhost",
    dialect: "postgres",
});

export default sequelize;