# Market Signal Dashboard

Single-user U.S. equity dashboard for Cloudflare Workers. The default ticker is SPY. Select a ticker and a provider to view historical closes and the change across displayed bars.

| View | Data |
| --- | --- |
| 7 days | Daily bars over seven calendar days |
| Weekly | Weekly bars over about six months |
| Monthly | Monthly bars over about two years |
| All time | Monthly bars over the longest history available from the selected provider and tier |

The latest weekly or monthly bar can be in progress. Period change uses the first and last displayed closes. Alpaca uses the IEX feed and split-adjusted bars. The rightmost point is the provider's bar timestamp. It is not a quote timestamp. Massive Basic serves end-of-day data for up to two years. Yahoo Finance uses an unofficial endpoint for personal research and may reject automated requests. The dashboard identifies the selected source and surfaces errors directly. Switch providers manually when needed.

## Local development

Use Node.js and run `npx wrangler dev`. Set LOCAL_PREVIEW=1 in .dev.vars for loopback access. Configure provider values in .dev.vars for local provider checks. Without them, the dashboard shows a connection message.

## Cloudflare deployment

1. Create a self-hosted Cloudflare Access application on your dashboard hostname and allow only the owner's email.
2. Create the Worker using wrangler.jsonc and connect the private GitHub repository through Workers Builds.
3. Set ACCESS_TEAM_DOMAIN to the Access team hostname without https, ACCESS_AUD to the application audience tag, and OWNER_EMAIL to the allowlisted email. The worker verifies Access JWTs before serving the dashboard or any endpoint.
4. Set ALPACA_DATA_KEY_ID, ALPACA_DATA_SECRET, MASSIVE_API_KEY, ALPACA_PAPER_KEY_ID, and ALPACA_PAPER_SECRET as encrypted Worker secrets. Set SEC_USER_AGENT to the dashboard name and a monitored contact email.
5. Attach the Access-protected custom hostname and validate signed-in access. Check that an unauthenticated request returns a denial. Keep workers.dev and deployment preview URLs disabled.

Alpaca Paper is read-only and shows simulated equity, cash, and positions. The dashboard does not connect to a bank or submit orders. Yahoo and SEC EDGAR require no data API key. Confirm access to all five sources in the target environment before using the dashboard for live monitoring.
