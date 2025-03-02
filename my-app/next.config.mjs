/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Turbopack configuration
  experimental: {
    // Enable Turbopack
    turbo: {
      // Enable Turbopack for both client and server
      loaders: {
        // Add any custom loaders here if needed
      },
      resolve: {
        // Add any custom resolve options here if needed
      }
    }
  },

  // Disable webpack features that might conflict with Turbopack
  webpack: false
};

export default nextConfig;
