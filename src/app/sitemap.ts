import { type MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
    const BASE_URL = "https://greenfieldcampus.com";
    const now = new Date();
    return [
        {
            url: BASE_URL,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${BASE_URL}/admission`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${BASE_URL}/login`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${BASE_URL}/school/about-us`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/school/mission-and-vision`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${BASE_URL}/school/principals-message`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${BASE_URL}/school/our-pledge`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${BASE_URL}/school/infrastructure`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/school/gallery`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/school/school-transport`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${BASE_URL}/school/school-transport/rules`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${BASE_URL}/school/school-transport/fees`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${BASE_URL}/school/school-transport/contact-us`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/misc/school-timings`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${BASE_URL}/misc/code-of-conduct`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${BASE_URL}/misc/positive-behavior-management`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${BASE_URL}/misc/school-uniform`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.6,
        },
    ];
};

export default sitemap;
