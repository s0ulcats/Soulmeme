'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'

interface MemeEditorProps {
  isOpen: boolean
  selectedMeme: Meme | null
  setIsOpen: (open: boolean) => void
  setSelectedMeme: (meme: Meme | null) => void
  updateMeme: (meme: Meme) => void
}

const MemeEditor: React.FC<MemeEditorProps> = ({ isOpen, selectedMeme, updateMeme, setIsOpen, setSelectedMeme }) => {
  const [errors, setErrors] = useState<{ name?: string; image?: string; likes?: string }>({})

  const handleChange = (field: keyof Meme, value: string) => {
    if (!selectedMeme) return
    let updated = { ...selectedMeme, [field]: value }
    if (field === 'likes') updated.likes = Number(value)
    setSelectedMeme(updated)
  }

  const validate = (): boolean => {
    if (!selectedMeme) return false
    const newErrors: typeof errors = {}

    if (selectedMeme.name.length < 3 || selectedMeme.name.length > 100) {
      newErrors.name = 'Name must be between 3 and 100 characters'
    }
    if (!/^https?:\/\/.+\.jpg$/.test(selectedMeme.image)) {
      newErrors.image = 'Image must be a valid .jpg URL'
    }
    if (
      isNaN(selectedMeme.likes) ||
      selectedMeme.likes < 0 ||
      selectedMeme.likes > 99
    ) {
      newErrors.likes = 'Likes must be a number between 0 and 99'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const saveMeme = () => {
    if (!selectedMeme || !validate()) return
    updateMeme(selectedMeme)
    setIsOpen(false)
    setSelectedMeme(null)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="text-card-foreground rounded-xl shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-primary">Edit Meme</DialogTitle>
        </DialogHeader>
        {selectedMeme && (
          <div className="space-y-4">
            <div>
              <Label>ID</Label>
              <Input value={selectedMeme.id} disabled className="bg-muted text-muted-foreground" />
            </div>
            <div>
              <Label>Name</Label>
              <Input
                value={selectedMeme.name}
                onChange={e => handleChange('name', e.target.value)}
                className="focus:ring-primary bg-muted text-muted-foreground"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <Label>Image URL (.jpg)</Label>
              <Input
                value={selectedMeme.image}
                onChange={e => handleChange('image', e.target.value)}
                className="focus:ring-primary bg-muted text-muted-foreground"
              />
              {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
            </div>
            <div>
              <Label>Likes</Label>
              <Input
                type="number"
                value={selectedMeme.likes}
                onChange={e => handleChange('likes', e.target.value)}
                className="focus:ring-primary bg-muted text-muted-foreground"
              />
              {errors.likes && <p className="text-red-500 text-sm">{errors.likes}</p>}
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <Button variant="outline" onClick={() => setIsOpen(false)} className="hover:bg-muted text-white">
                Cancel
              </Button>
              <Button onClick={saveMeme} className="bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-background transition-all">
                Save
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default MemeEditor
