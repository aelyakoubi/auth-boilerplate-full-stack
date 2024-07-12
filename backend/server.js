import express from 'express';
import cors from 'cors';
import auth from './src/authMiddleware.js';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

// Public endpoint
app.get('/', (req, res) => {
  res.send('Public Resource, you are successfully connected to the server ');
});

// Use the auth middleware to protect the /protected endpoint
app.get('/protected', auth, (req, res) => {
  res.send('Secured Resource');
});

// Error-handling middleware for unauthorized requests
app.use((err, req, res, next) => {
  switch (err.name) {
    case 'UnauthorizedError':
      res.status(401).send('Unauthorized');
      break;
    case 'InvalidTokenError':
      res.status(401).send('Invalid Token');
      break;
    default:
      next(err);
  }
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
