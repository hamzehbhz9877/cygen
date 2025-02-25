/** @type {import('next').NextConfig} */
import NextBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig = {
    images:{
        domains:['www.technolife.ir',"pars.parskalas.com","api.cygenco.com","cygenco.com","encrypted-tbn0.gstatic.com"]
    },
    output: "standalone",
    env: {
        DEV_HOST: "http://localhost:3000",
        PROD_HOST: "http://www.viracommerce.ir",
        PRODUCTION: true,

    },
};
const withBundleAnalyzer = NextBundleAnalyzer({
    enabled:false,
})

export default withBundleAnalyzer(nextConfig)
