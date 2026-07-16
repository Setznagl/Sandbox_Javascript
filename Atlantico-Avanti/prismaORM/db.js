import {PrismaPg} from "@prisma/adapter-pg";
import {PrismaClient} from "@prisma/client";
import "dotenv/config";

const adapter = new PrismaPg({connectionString: process.env.DATABASE_URL});

const prismaClient = new PrismaClient(
    {adapter , log:["query" , "info" , "warn" , "error"] }
);export default prismaClient;