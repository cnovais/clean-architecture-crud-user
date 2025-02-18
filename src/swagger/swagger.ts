import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Clean Architecture API",
      version: "1.0.0",
      description: "API de exemplo utilizando Clean Architecture",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

const specs = swaggerJsdoc(options);

export default (app: any) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};