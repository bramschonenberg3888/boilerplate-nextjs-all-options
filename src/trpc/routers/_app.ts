import { createTRPCRouter, baseProcedure } from "../init";
import { z } from "zod";

export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(z.object({ name: z.string() }).optional())
    .query(({ input }) => ({
      greeting: `Hello ${input?.name ?? "World"}!`,
    })),

  getSession: baseProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
});

export type AppRouter = typeof appRouter;
