import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.get('/', (req, res) => res.json({
	message: 'my diary app'
}));

app.put('/route', (req, res) => res.json({
	message: 'route for getting entries'
}))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  // console.log(`app started on port ${PORT}`);
});

export default app;
