This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, download the necessary packages:

```bash
npm install --save sass
npm install --save axios
npm install --save express
npm install --save nodemon
npm install --save cross-env
npm install --save next-routes
npm install --save reactstrap
npm install --save bootstrap
npm install --save react-typed
npm install --save swr
npm install --save auth0/nextjs-auth0@0.11.0
npm install --save dotenv-webpack
```

Then, register for auth0 from:
[https://auth0.com/](https://auth0.com/)

And then create an .env.development.local in your rootfolder

```text
AUTH0_DOMAIN=<AUTH0_DOMAIN>
AUTH0_CLIENT_ID=<AUTH0_CLIENT_ID>
AUTH0_CLIENT_SECRET=<AUTH0_CLIENT_SECRET>
AUTH0_REDIRECT_URI=http://localhost:3000/api/callback
AUTH0_POST_LOGOUT_URI=http://localhost:3000/
AUTH0_COOKIE_SECRET=<RANDOMLY_GENERATED_SECRET>
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
