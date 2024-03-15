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
export type APISuccessResponse<Endpoint extends APIEndpoints, Method extends APIMethods<Endpoint>> = SuccessResponseJSON<paths[Endpoint][Method]>;
const successResponse: APISuccessResponse<"/accounts", "post"> = {
  id: "",
  name: "",
  role: "ADMIN"
};

/**
 * Body request (JSON) of a request
 */
export type APIBodyRequest<Endpoint extends APIEndpoints, Method extends APIMethods<Endpoint>> = RequestBodyJSON<paths[Endpoint][Method]>;
const bodyRequest: APIBodyRequest<"/accounts", "post"> = {
  name: "",
  password: ""
};

// https://github.com/drwpow/openapi-typescript/blob/main/packages/openapi-typescript-helpers/index.d.ts
// https://github.com/drwpow/openapi-typescript/blob/main/packages/openapi-fetch/src/index.d.ts
// https://grafikart.fr/tutoriels/typescript-openapi-types-1926