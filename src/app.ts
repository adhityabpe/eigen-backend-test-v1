import express from 'express';
import bodyParser from 'body-parser';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import memberRoutes from './interface/routes/memberRoutes';
import bookRoutes from './interface/routes/bookRoutes';
import borrowedBookRoutes from './interface/routes/borrowedBookRoutes';

const app = express();
const port = 3000;

app.use(bodyParser.json());

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

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api', memberRoutes);
app.use('/api', bookRoutes);
app.use('/api', borrowedBookRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});