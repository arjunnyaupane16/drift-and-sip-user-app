// cronJobs.js
import { subDays } from 'date-fns';
import cron from 'node-cron';
import Order from './models/orderModel.js';

export const setupOrderCleanupJob = () => {
  cron.schedule('0 * * * *', async () => {
    const cutoff = subDays(new Date(), 1); // 24 hrs ago

    try {
      const result = await Order.updateMany(
        {
          createdAt: { $lt: cutoff },
          isDeleted: false,
          isArchived: false
        },
        {
          $set: {
            isDeleted: true,
            scheduledForDeletion: true,
            deletedAt: new Date()
          }
        }
      );

      console.log(`${result.modifiedCount} orders marked as deleted (older than 24h)`);
    } catch (err) {
      console.error('Error in scheduled order cleanup:', err.message);
    }
  });
};
