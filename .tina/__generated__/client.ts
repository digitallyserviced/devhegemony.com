import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '8a5b19d2edfd8f4199da590d7842e394a54fe68d', queries,  });
export default client;
  