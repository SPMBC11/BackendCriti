import { Sequelize } from "sequelize";

const sequelize = new Sequelize("CritiChord", "postgres", "sa", {
  port: 5432,
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
