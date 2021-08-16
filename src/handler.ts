import { Handler, Context } from "aws-lambda";
import { v4 as uuidv4 } from 'uuid';

interface HelloResponse {
  statusCode: number;
  body: string;
}

const hello: Handler = async (event: any, context: Context) => {
  let uuid = uuidv4();
  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify({
      requestId: uuid,
      message: "Hello World!"
    })
  };
  return response;
};

export { hello };