"use client"

import { motion } from "framer-motion"

export default function AnimatedDescription() {
  return (
    <h3 className="flex animate-fade-up-5 flex-col text-center text-lg opacity-0">
      Over the last 5y, I&apos;ve empowered +5 companies
      <span className="max-w-[42rem] animate-fade-up-6 leading-normal text-muted-foreground opacity-0 sm:text-xl sm:leading-8">
        Designing user-centric experiences that captivate, engage, and create
        meaningful impact.
      </span>
    </h3>
  )
}
