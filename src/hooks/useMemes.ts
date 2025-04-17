'use client'

import { IMAGE_URLS } from '@/libs/constants/url.constants'
import { useEffect, useState } from 'react'

const STORAGE_KEY = 'memes'

const getInitialMemes = (): Meme[] => {
  return IMAGE_URLS.map((url, i) => ({
    id: i + 1,
    name: `Meme ${i + 1}`,
    image: url,
    likes: Math.floor(Math.random() * 100),
  }))
}

export const useMemes = () => {
  const [memes, setMemes] = useState<Meme[]>([])

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        setMemes(JSON.parse(stored))
      } catch {
        setMemes(getInitialMemes())
      }
    } else {
      setMemes(getInitialMemes())
    }
  }, [])

  useEffect(() => {
    if (memes.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(memes))
    }
  }, [memes])

  return { memes, setMemes }
}
