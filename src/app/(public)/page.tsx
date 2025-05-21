import Link from "next/link"

import { features } from "@/config/feature"

import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full border-b py-15">
        <MaxWidthWrapper className="flex flex-col items-center justify-center gap-y-6">
          <div className="space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
                E-Commerce Content Management System
              </h1>
              <p className="text-muted-foreground mx-auto max-w-prose text-sm leading-relaxed tracking-wide text-pretty lg:text-base">
                ZENO is a modern and effective e-commerce content management
                system that helps you streamline your online store operations.
              </p>
            </div>
            <div>
              <Link
                href="/login"
                className={buttonVariants({ size: "lg", className: "group" })}
              >
                Get Started
                <Icons.arrowRight className="duration-300 ease-in-out group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Features */}
      <section className="bg-muted/30 w-full border-b py-15">
        <MaxWidthWrapper className="flex flex-col items-center justify-center gap-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-xl font-extrabold tracking-tight lg:text-3xl">
              Everything You Need
            </h2>
            <p className="text-muted-foreground max-w-prose text-sm leading-relaxed tracking-wide text-pretty lg:text-base">
              ZENO provides all the tools you need to manage your e-commerce
              business efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {features.map((feature) => (
              <Card className="space-y-2" key={feature.title}>
                <CardContent className="flex items-start gap-x-4">
                  <div className="bg-primary/60 dark:bg-primary border-foreground rounded-full border-2 p-3">
                    <feature.icon className="size-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="flex items-center gap-x-3 text-lg font-semibold lg:text-2xl">
                      {feature.title}
                    </h3>
                    <p className="text-sm lg:text-base">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
