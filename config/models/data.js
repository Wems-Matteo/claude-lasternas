'use strict';

import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  main: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
}, { _id: false });

export default mongoose.models.data
  || mongoose.model('data', dataSchema);
