/// <reference types="@cloudflare/workers-types" />
import { createAEOWorker } from "@dualmark/cloudflare";
import type {
  AnalyticsEngineDataset,
  MinimalEnv,
  MinimalExecutionContext,
} from "@dualmark/cloudflare";

interface Env extends MinimalEnv {
  AI_AGENT_ANALYTICS?: AnalyticsEngineDataset;
}

const upstream = {
  fetch(request: Request, env: Env, _ctx: MinimalExecutionContext): Promise<Response> {
    return env.ASSETS.fetch(request);
  },
};

export default createAEOWorker<Env>({
  upstream,
  trailingSlash: "never",
  enableLinkHeader: true,
  analytics: { binding: "AI_AGENT_ANALYTICS" },
});
