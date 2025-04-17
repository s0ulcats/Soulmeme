'use client'

import * as React from 'react'
import * as DialogPrimitive from '@headlessui/react'

export function Dialog({
  open,
  onOpenChange,
  children,
  className, 
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
  className?: string 
}) {
  return (
    <DialogPrimitive.Dialog open={open} onClose={() => onOpenChange(false)} className={className}>
      {children}
    </DialogPrimitive.Dialog>
  )
}

export function DialogContent({
  children,
  className,  
}: {
  children: React.ReactNode
  className?: string 
}) {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/30 ${className}`}>
      <div className="bg-card rounded-2xl shadow-xl w-full max-w-md p-6">
        {children}
      </div>
    </div>
  )
}

export function DialogHeader({
  children,
  className,  
}: {
  children: React.ReactNode
  className?: string  
}) {
  return <div className={`mb-4 ${className}`}>{children}</div>
}

export function DialogTitle({
  children,
  className,  
}: {
  children: React.ReactNode
  className?: string  
}) {
  return <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>
}
