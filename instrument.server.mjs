import * as Sentry from "@sentry/react-router";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
	dsn: "https://7af1160c504207cd7a17daabd6133c37@o4509515094097920.ingest.de.sentry.io/4509531319697488",

	// Adds request headers and IP for users, for more info visit:
	// https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
	sendDefaultPii: true,

	integrations: [nodeProfilingIntegration()],
	tracesSampleRate: 1.0, // Capture 100% of the transactions
	profilesSampleRate: 1.0, // profile every transaction
});
