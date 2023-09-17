// import {PrismaClient} from '@prisma/client';

// const client = globalThis.prisma || new PrismaClient();
// if(process.env.NODE_ENV !== 'production') globalThis.prisma = client;

// export default client;


import {PrismaClient} from '@prisma/client';

global.prisma = global.prisma || new PrismaClient({ log: ["info"] });

if (process.env.NODE_ENV !== "production") global.prisma = global.prisma;

module.exports = global.prisma;
