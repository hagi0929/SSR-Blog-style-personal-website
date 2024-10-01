import { ArticleSeriesModel } from '@/models/models'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import Link from 'next/link'


interface WritingCarouselProps {
  articles: ArticleSeriesModel[]
}

const WritingCarousel = ({ articles }: WritingCarouselProps) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {articles.map((article) => (
          <Link key={article.slug} href={`/writings/series/${article.slug}`}>
            <CarouselItem>
              <Card>
                <CardHeader>
                  <CardTitle>{article.label}</CardTitle>
                </CardHeader>
              </Card>
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