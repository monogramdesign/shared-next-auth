/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  async rewrites() {
    return {
      beforeFiles: [
        // These rewrites are checked after headers/redirects
        // and before all files including _next/public files which
        // allows overriding page files.
        // Wildcard rewrite to CORS file in Azure.

        // anything pointing to <WEBSITE_URL>/portal/* will be rewritten to <PORTAL_URL>/portal/*
        // including <WEBSITE_URL>/portal => <PORTAL_URL>/portal
        {
          source: `${process.env.NEXT_PUBLIC_PORTAL_BASE_PATH}/:path*`,
          destination: `${process.env.NEXT_PUBLIC_PORTAL_URL}${process.env.NEXT_PUBLIC_PORTAL_BASE_PATH}/:path*`,
        },

        // The user will be able to go to <WEBSITE_URL>/my-results instead of <WEBSITE_URL>/portal/my-results
        {
          source: "/my-results",
          destination: `${process.env.NEXT_PUBLIC_PORTAL_URL}${process.env.NEXT_PUBLIC_PORTAL_BASE_PATH}/my-results`,
        },

        // anything pointing to <WEBSITE_URL>/api/auth/* will be rewritten to <PORTAL_URL>/portal/api/auth/*
        // this necessary because NextAuth will use its redirects to the current host/domain
        // and we want all the auth routes to be managed in the portal site
        {
          source: `/api/auth/:path*`,
          destination: `${process.env.NEXT_PUBLIC_PORTAL_URL}${process.env.NEXT_PUBLIC_PORTAL_BASE_PATH}/api/auth/:path*`,
        },
      ],
    };
  },
};