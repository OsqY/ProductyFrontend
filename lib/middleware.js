import withMiddlewareAuthRequiredFactory from "@auth0/nextjs-auth0/dist/helpers/with-middleware-auth-required";

export default withMiddlewareAuthRequiredFactory();

export const config = {
  matcher: ['/user/:path']
};
