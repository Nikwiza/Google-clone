/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['upload.wikimedia.org']
    },

    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
