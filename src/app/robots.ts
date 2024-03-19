import { type MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => {
    return {
        rules: {
            // allow crawling of all pages except dashboard pages
            userAgent: "*",
            allow: "/",
            disallow: "/dashboard/",
        },
        sitemap: "https://greenfieldcampus.com/sitemap.xml",
    };
};

export default robots;
