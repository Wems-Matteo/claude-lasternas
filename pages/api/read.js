'use strict';

import connect from '../../config/connect';
import model from '../../config/models/data';

export default async function read(request, response) {
  if (request.method !== 'GET')
    return;

  let { main, found, _id } = request.query;
  found = Number(found);

  try {
    let data;

    await connect();

    if (main) {
      data = await model.find({ main: /oui/i });
    } else if (!isNaN(found)) {
      data = await model.find({}).skip(found).limit(4);
    } else if (_id !== 'undefined') {
      data = await model.findById(_id);
    }

    response.status(200).json({ data });
  } catch (error) {
    throw error;
  }
}
