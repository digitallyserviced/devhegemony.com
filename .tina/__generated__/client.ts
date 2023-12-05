import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/df4d12b2-9a2c-40e2-a002-5d6bb3f08863/github/master', token: '8a5b19d2edfd8f4199da590d7842e394a54fe68d', queries,  });
export default client;
  