import { PrismaClient } from "@prisma/client";

// next js does page reload on every code change , so this will create way many PrismaClient so it will cause error, thats why we store them to global files. global files does not hot reload, and in production we dont do that , everything is normal

const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV === "production") global.prismadb = client;

export default client;
