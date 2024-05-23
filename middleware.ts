import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)',

]);

export default clerkMiddleware((auth, req) => {

    //    check if this user exists in db

    if (isProtectedRoute(req)) auth().protect();
});

export const config = {
    // The following matcher runs middleware on all routes
    // except static assets.
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};