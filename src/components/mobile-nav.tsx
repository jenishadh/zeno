"use client"

import { useState } from "react"
import Link from "next/link"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/mode-toggle"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const isLoggedIn = false

  return (
    <div className="flex w-full items-center justify-between md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button size="icon" variant="ghost" className="h-8 w-8">
            <Icons.menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[280px] overflow-y-auto p-0">
          <SheetHeader className="border-b px-4 py-3 text-left">
            <SheetTitle onClick={() => setOpen(false)}>
              <Link href="/" className="flex items-center gap-x-2 text-base">
                <Icons.zap className="size-5" />
                <span className="font-bold">Zeno</span>
              </Link>
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col py-3">
            <Link
              href="/docs"
              className="hover:bg-muted/70 flex items-center gap-3 px-4 py-2.5 text-sm"
              onClick={() => setOpen(false)}
            >
              <Icons.bookText className="size-4" />
              <span className="text-foreground">Documentation</span>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>

      <Link href="/" className="flex items-center space-x-2">
        <Icons.zap className="size-5" />
        <span className="text-lg font-bold">Zeno</span>
      </Link>

      <div className="flex items-center gap-2">
        <ModeToggle />
        <Link
          href={`${isLoggedIn}` ? "/dashboard" : "login"}
          className={buttonVariants({
            variant: "outline",
            size: "icon",
            className: "h-8 w-8",
          })}
        >
          <Icons.user className="h-4 w-4" />
          <span className="sr-only">
            {isLoggedIn ? "Sign In" : "Dashboard"}
          </span>
        </Link>
      </div>
    </div>
  )
}
