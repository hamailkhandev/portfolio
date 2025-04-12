import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hamail.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      images: ['https://hamail.vercel.app/profile-image.png'],
    },
  ]
}
