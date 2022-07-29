import faunadb from 'faunadb';

export const serverClient = new faunadb.Client({
  secret: process.env.FAUNA_SERVER_SECRET as string,
  domain: "db.eu.fauna.com"
});

export const authClient = (secret: string) =>
  new faunadb.Client({
    secret,
    domain: "db.eu.fauna.com"
});

export const guestClient = new faunadb.Client({
  secret: process.env.NEXT_PUBLIC_FAUNA_PUBLIC_SECRET as string,
  domain: "db.eu.fauna.com"
});