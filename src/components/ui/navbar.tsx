import { cn } from '@/utils/tw-merge'
import * as React from 'react'

type NavbarType = React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
> & {
  Logo: React.FC<React.PropsWithChildren>
  Content: React.FC<React.PropsWithChildren>
  Item: React.FC<React.PropsWithChildren>
}

const Navbar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center justify-between p-4 bg-gray-900 text-white', className)}
      {...props}
    >
      {children}
    </div>
  )
) as NavbarType

Navbar.displayName = 'Navbar'

Navbar.Logo = ({ children }) => (
  <div className="text-lg font-semibold">
    {children}
  </div>
)

Navbar.Content = ({ children }) => (
  <div className="flex space-x-4">
    {children}
  </div>
)

Navbar.Item = ({ children }) => (
  <div className="hover:underline">
    {children}
  </div>
)

export { Navbar }
