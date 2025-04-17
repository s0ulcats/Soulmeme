import { type PropsWithChildren } from "react";

export default function LayoutContainer({ children }: PropsWithChildren<unknown>) {

  return (
    <main>
      {children}
    </main>
  )
}
