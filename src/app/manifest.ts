import { SITE_DESCRIPTION, SITE_NAME } from "@/libs/constants/seo.constants";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
return {
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#E5E7EB',
    theme_color: '#9c8564',
    icons: [
        {
            src: '/touch-icons/256x256.png',
            sizes: '256x256',
            type: 'image/png'
        },
        {
            src: '/touch-icons/512x512.png',
            sizes: '512x512',
            type: 'image/png'
        }
    ]
}
}