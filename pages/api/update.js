'use strict';

import connect from '../../config/connect';
import model from '../../config/models/data';

export default async function update(request, response) {
  if (request.method !== 'POST')
    return;

  const { _id, main, price, description } = JSON.parse(request.body);

  try {
    await connect();

    await model.findOneAndUpdate({ _id }, { main, price, description }, { upsert: true });

    response.status(200).json({ success: true });
  } catch (error) {
    throw error;
  }
}
