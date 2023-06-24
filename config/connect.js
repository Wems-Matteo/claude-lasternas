'use strict';

import mongoose from 'mongoose';

export default async function connect() {
  if (mongoose.connections[0].readyState)
    return;
  
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('[*] Mongoose');
  } catch (error) {
    throw error;
  }
}
