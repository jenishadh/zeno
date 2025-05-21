import Link from "next/link"

import { Icons } from "@/components/icons"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"

export function Footer() {
  return (
    <footer className="w-full border-t py-12 md:py-16">
      <MaxWidthWrapper>
        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Icons.zap className="size-5" />
              <span className="text-lg font-bold">Zeno</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              ZENO is a modern and effective e-commerce content management
              system that helps you streamline your online store operations.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-foreground text-sm font-medium">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Documents
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between border-t pt-6 sm:flex-row">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Zeno. All rights reserved.
          </p>
          <div className="mt-4 flex gap-6 sm:mt-0">
            <Link
              href="privacy"
              className="text-muted-foreground hover:text-foreground text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-foreground text-xs transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}
