'use strict';

import connect from '../../config/connect';
import model from '../../config/models/data';

export default async function create(request, response) {
  if (request.method !== 'POST')
    return;

  const _id = Math.random().toString(36).slice(-8);
  const { main, file, price, description } = JSON.parse(request.body);

  try {
    await connect();

    const data = new model({ _id, main, file, price, description });
    await data.save();

    response.status(200).json({ success: true });
  } catch (error) {
    throw error;
  }
}
