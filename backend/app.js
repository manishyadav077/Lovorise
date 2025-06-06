import express from 'express';
import dashboardRoutes from './backend/routes/dashboardRoutes.js';
import authRoutes from './backend/routes/authRoutes.js'


const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

export default app;
