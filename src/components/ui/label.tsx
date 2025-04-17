import { cn } from '@/utils/tw-merge'
import * as React from 'react'

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        className={cn('text-sm font-medium leading-none', className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Label.displayName = 'Label'
