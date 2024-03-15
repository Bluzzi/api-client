/* eslint-disable @typescript-eslint/no-unused-vars */

import type { RequestBodyJSON, SuccessResponseJSON } from "openapi-typescript-helpers";
import type { paths } from "#/spec";

/**
 * API endpoints
 */
export type APIEndpoints = keyof paths;
const apiEndpoints: APIEndpoints = "/accounts";

/**
 * Methods of an endpoint
 */
export type APIMethods<Endpoint extends APIEndpoints> = keyof paths[Endpoint];
const apiMethods: APIMethods<"/accounts"> = "post";

/**
 * Success response (JSON) for a request
 */
export type APIResponseSuccess<Endpoint extends APIEndpoints, Method extends APIMethods<Endpoint>> = SuccessResponseJSON<paths[Endpoint][Method]>;
const successResponse: APIResponseSuccess<"/accounts", "post"> = {
  id: "",
  name: "",
  role: "ADMIN"
};

/**
 * Request body (JSON) for a request
 */
export type APIRequestBody<Endpoint extends APIEndpoints, Method extends APIMethods<Endpoint>> = RequestBodyJSON<paths[Endpoint][Method]>;
const bodyRequest: APIRequestBody<"/accounts", "post"> = {
  name: "",
  password: ""
};

/**
 * Request query (JSON) for a request
 */
export type APIRequestQuery<Endpoint extends APIEndpoints, Method extends APIMethods<Endpoint>> = (
  paths[Endpoint][Method] extends { parameters: { query?: infer Query } } ? Query : never
);
const queryRequest: APIRequestQuery<"/products/standard", "get"> = {
  includeDeleted: false,
  onlyIDs: [],
  search: ""
};

// https://github.com/drwpow/openapi-typescript/blob/main/packages/openapi-typescript-helpers/index.d.ts
// https://github.com/drwpow/openapi-typescript/blob/main/packages/openapi-fetch/src/index.d.ts
// https://grafikart.fr/tutoriels/typescript-openapi-types-1926