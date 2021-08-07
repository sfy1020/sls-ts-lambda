import * as schema from './schema';
import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'hello',
        request: {
          schema: {
            'application/json': schema.default
          }
        }
      }
    }
  ]
}

export const sub = {
  handler: `${handlerPath(__dirname)}/handler.sub`,
  events: [
    {
      http: {
        method: 'get',
        path: 'helloSub',
        request: {
          schema: {
            'application/json': schema.sub
          }
        }
      }
    }
  ]
}
