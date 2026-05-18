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

const DISCOVERY_LINKS = [
  '</llms.txt>; rel="describedby"; type="text/plain"',
  '</sitemap.xml>; rel="sitemap"; type="application/xml"',
  '</feed.xml>; rel="alternate"; type="application/rss+xml"; title="RSS Feed"',
  '</.well-known/agent-skills/index.json>; rel="https://agentskills.io/rel/index"; type="application/json"',
  '<https://github.com/leonardomso>; rel="author"',
];

const upstream = {
  fetch(request: Request, env: Env, _ctx: MinimalExecutionContext): Promise<Response> {
    return env.ASSETS.fetch(request);
  },
};

const aeoWorker = createAEOWorker<Env>({
  upstream,
  trailingSlash: "never",
  enableLinkHeader: true,
  analytics: { binding: "AI_AGENT_ANALYTICS" },
});

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: MinimalExecutionContext,
  ): Promise<Response> {
    const response = await aeoWorker.fetch(request, env, ctx);
    const out = new Response(response.body, response);
    for (const link of DISCOVERY_LINKS) {
      out.headers.append("Link", link);
    }
    return out;
  },
};
