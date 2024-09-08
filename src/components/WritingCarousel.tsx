import { ArticleSeriesModel } from '@/models/models'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'


interface WritingCarouselProps {
  articles: ArticleSeriesModel[]
}

const WritingCarousel = ({ articles }: WritingCarouselProps) => {
  return (
    <Carousel className="w-full max-w-full">
      <CarouselContent>
        {articles.map((article) => (
          <Link key={article.id} href={`/writings/${article.slug}`}>
            <CarouselItem >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{article.label}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </Link>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default WritingCarousel