import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hamaildev.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      images: ['https://hamaildev.vercel.app/profile-image.png'],
    },
  ]
}