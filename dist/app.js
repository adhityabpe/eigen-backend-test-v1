"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const memberRoutes_1 = __importDefault(require("./interface/routes/memberRoutes"));
const bookRoutes_1 = __importDefault(require("./interface/routes/bookRoutes"));
const borrowedBookRoutes_1 = __importDefault(require("./interface/routes/borrowedBookRoutes"));
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Library API',
            version: '1.0.0',
            description: 'API for managing library members and books',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./src/interfaces/routes/*.ts'],
};
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
app.use('/api', memberRoutes_1.default);
app.use('/api', bookRoutes_1.default);
app.use('/api', borrowedBookRoutes_1.default);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
