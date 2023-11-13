import mongoose from 'mongoose';

const connection = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('Database connected');
  } catch (error) {
    console.log('database connection error', error);
  }
};

export default connection;
