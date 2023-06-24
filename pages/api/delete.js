'use strict';

import connect from '../../config/connect';
import model from '../../config/models/data';

export default async function _delete(request, response) { // "delete" does not work.
  if (request.method !== 'POST')
    return;

  const { _id } = JSON.parse(request.body);

  try {
    await connect();

    await model.findOneAndDelete({ _id });

    response.status(200).json({ success: true });
  } catch (error) {
    throw error;
  }
}
