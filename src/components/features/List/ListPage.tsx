'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { useMemes } from '@/hooks/useMemes'

export default function ListPage() {
  const { memes } = useMemes()

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {memes.map(meme => (
          <Card key={meme.id} className="overflow-hidden bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-accent-foreground">{meme.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <a href={meme.image} target="_blank" rel="noopener noreferrer">
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
                  <img
                    src={meme.image}
                    alt={meme.name}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </AspectRatio>
              </a>
              <p className="mt-3 text-sm text-gray-500">
                ❤️ {meme.likes} likes
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
