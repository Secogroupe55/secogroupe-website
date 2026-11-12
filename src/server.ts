import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import {
  getAllowedHosts,
  getContext,
  getTrustProxyHeaders,
} from '@netlify/angular-runtime/app-engine.js';

const angularAppEngine = new AngularAppEngine({
  allowedHosts: getAllowedHosts(),
  trustProxyHeaders: getTrustProxyHeaders(),
});

export async function netlifyAppEngineHandler(
  request: Request
): Promise<Response> {
  const context = getContext();

  // Tu peux définir tes endpoints API ici si nécessaire.

  const result = await angularAppEngine.handle(request, context);

  return result || new Response('Not found', { status: 404 });
}

/**
 * Request handler utilisé par Angular CLI.
 */
export const reqHandler = createRequestHandler(netlifyAppEngineHandler);