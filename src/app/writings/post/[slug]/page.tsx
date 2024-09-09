import { getWritings } from '@/api/writtings';
import React from 'react'

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getWritings();
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <div>Page {params.slug}</div>
  )
}

export default Page