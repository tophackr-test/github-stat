import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                pathname: '/u/**'
            }
        ]
    }
}

export default nextConfig
