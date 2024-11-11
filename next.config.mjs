/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Ensures a static export for frontend-only deployment

    eslint: {
        ignoreDuringBuilds: true, // Keeps ESLint errors from affecting the build process
    },

    // Optional: Enable React strict mode
    reactStrictMode: true,

    // Example of setting up environment variables for frontend use
    env: {
        NEXT_PUBLIC_API_BASE_URL: "https://your-api-url.com", // Only use variables prefixed with NEXT_PUBLIC_ for client-side use
    },

    // Image configuration for a static site
    images: {
        unoptimized: true, // Disable image optimization for static export
        domains: ["your-image-domain.com"], // Add any external domains for images if needed
    },
};

export default nextConfig;
