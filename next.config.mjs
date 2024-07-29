/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'masterbbqerbil.net',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
