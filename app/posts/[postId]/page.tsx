import { getSortedPostsData } from '@/lib/posts';
import React from 'react';
import { notFound } from "next/navigation"

export default async function Post({params }: {params: {postId: string } }) {
  const posts = getSortedPostsData() //deduped!
  const { postId } = params  
  return (
    <div>
      
    </div>
  );
}
