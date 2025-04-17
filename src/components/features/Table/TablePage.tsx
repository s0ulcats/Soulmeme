'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useMemes } from '@/hooks/useMemes'
import MemeEditor from './MemeEditor/MemeEditor'
import { IMAGE_URLS } from '@/libs/constants/url.constants'

export default function TablePage() {
  const { memes, setMemes } = useMemes()
  const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const openModal = (meme: Meme) => {
    setSelectedMeme(meme)
    setIsOpen(true)
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="overflow-auto border border-border rounded-2xl shadow-lg bg-card">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-muted text-muted-foreground uppercase text-xs tracking-wider">
            <tr>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Likes</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {memes.map(meme => (
              <tr key={meme.id} className="border-t border-border hover:bg-muted transition-colors">
                <td className="px-6 py-4">{meme.id}</td>
                <td className="px-6 py-4">{meme.name}</td>
                <td className="px-6 py-4">{meme.likes}</td>
                <td className="px-6 py-4">
                  <Button variant="outline" onClick={() => openModal(meme)} className="bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-background transition-all">
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <MemeEditor
        isOpen={isOpen}
        selectedMeme={selectedMeme}
        setIsOpen={setIsOpen}
        setSelectedMeme={setSelectedMeme}
        updateMeme={(updatedMeme) => {
          setMemes(prev => prev.map(m => m.id === updatedMeme.id ? updatedMeme : m))
        }}
      />
    </div>
  )
}
