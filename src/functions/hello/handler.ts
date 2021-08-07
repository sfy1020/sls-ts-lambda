import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import * as schema from './schema';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema.default> = async (event) => {
  return formatJSONResponse({
    message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    event,
  });
}

export const main = middyfy(hello);

const helloSub: ValidatedEventAPIGatewayProxyEvent<typeof schema.sub> = async (event) => {
  return formatJSONResponse({
    message: `Hello ${event.body}, welcome to the exciting Serverless world!`,
    event,
  });
}

export const sub = middyfy(helloSub);
