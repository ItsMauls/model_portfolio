import { PrismaClient } from '@prisma/client'
import { defaultGalleryPhotos, defaultHeroMediaUrl, defaultWorkItems } from '../src/lib/model-content'

const prisma = new PrismaClient()

async function main() {
  await prisma.siteSettings.upsert({
    where: { id: 1 },
    update: {},
    create: { id: 1, heroMediaUrl: defaultHeroMediaUrl },
  })

  for (const item of defaultWorkItems) {
    await prisma.workItem.upsert({
      where: { id: item.id },
      update: item,
      create: item,
    })
  }

  for (const photo of defaultGalleryPhotos) {
    await prisma.galleryPhoto.upsert({
      where: { id: photo.id },
      update: photo,
      create: photo,
    })
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
