import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${process.env.BASE_URL}/butikk`
        },
        {
            url: `${process.env.BASE_URL}/kontakt-oss`
        },
        {
            url: `${process.env.BASE_URL}/om-oss`
        },
        {
            url: `${process.env.BASE_URL}/vare-sykler`
        },
        {
            url: `${process.env.BASE_URL}/verksted`
        },
    ]
}