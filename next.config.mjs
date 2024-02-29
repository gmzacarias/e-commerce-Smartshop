import withSvgr from "next-svgr"
/** @type {import('next').NextConfig} */
const nextConfig = withSvgr({
  reactStrictMode: true,
  compiler:{
    styledComponents:true
  }
});

export default nextConfig;

