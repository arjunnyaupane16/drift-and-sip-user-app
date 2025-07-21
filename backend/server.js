import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cron from 'node-cron';

import { archiveOldOrders } from './controllers/orderController.js';
import { setupOrderCleanupJob } from './cronJobs.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('🚀 Drift and Sip Backend Running on Vercel!');
});
app.use('/api/orders', orderRoutes);

// DB connect
let isConnected = false;
const connectDB = async () => {
  if (!isConnected) {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log('✅ MongoDB connected');
    setupOrderCleanupJob();

    cron.schedule('0 0 * * *', async () => {
      console.log('⏳ Running daily archiving...');
      await archiveOldOrders();
    });
  }
};

export default async function handler(req, res) {
  await connectDB();
  app(req, res);
}
