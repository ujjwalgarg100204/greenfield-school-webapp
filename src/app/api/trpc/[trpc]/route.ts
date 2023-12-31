import { appRouter } from "@/server/api/root";
import { db } from "@/server/db";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (req: Request) =>
    fetchRequestHandler({
        endpoint: "/api/trpc",
        req,
        router: appRouter,
        createContext: () => ({ db }),
    });

export { handler as GET, handler as POST };
