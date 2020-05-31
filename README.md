# NestJS + Fastify custom Content-Type issue

A repository to illustrate an issue in NestJS + Fastify after using a custom Content-Type.

Steps to run:

```bash
yarn install
yarn build
yarn start:dev
```

`http://localhost:3000/` will fail with the following error:

> FastifyError [FST_ERR_REP_INVALID_PAYLOAD_TYPE]: FST_ERR_REP_INVALID_PAYLOAD_TYPE: Attempted to send payload of invalid type 'object'. Expected a string or Buffer.

`http://localhost:3000/no-interceptor` does not uses the interceptor and it will return the expected result.
