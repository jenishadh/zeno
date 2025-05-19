"use client"

import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/mode-toggle"

export function MainNav() {
  const isLoggedIn = false

  return (
    <div className="hidden w-full items-center justify-between md:flex">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.zap className="size-5" />
        <span className="text-lg font-bold">Zeno</span>
      </Link>

      <nav className="flex items-center gap-x-3">
        <Link
          href="/docs"
          className={buttonVariants({ variant: "ghost", size: "sm" })}
        >
          Documentation
        </Link>
        <div className="bg-muted-foreground/30 h-6 w-[2px]" />
        <ModeToggle />
        {isLoggedIn ? (
          <Link
            href="/dashboard"
            className={buttonVariants({
              size: "sm",
              className: "text-sm font-medium",
            })}
          >
            Dashboard
          </Link>
        ) : (
          <Link
            href="/login"
            className={buttonVariants({
              size: "sm",
              className: "text-sm font-medium",
            })}
          >
            Login
          </Link>
        )}
      </nav>
    </div>
  )
}
