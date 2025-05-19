import { MainNav } from "@/components/main-nav"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"

import { MobileNav } from "./mobile-nav"

export function Navbar() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <MaxWidthWrapper className="flex h-14 items-center">
        <MobileNav />
        <MainNav />
      </MaxWidthWrapper>
    </header>
  )
}
