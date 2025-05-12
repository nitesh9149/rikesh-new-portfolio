"use client"

import { motion } from "framer-motion"

export default function AnimatedDescription() {
  return (
    <h3 className="flex animate-fade-up-5 flex-col text-center text-xl font-semibold opacity-0">
      Over the last 5y, I&apos;ve empowered +5 companies
      <span className="max-w-[42rem] animate-fade-up-6 pt-2 text-lg font-light leading-normal opacity-0 sm:leading-8">
        Designing user-centric experiences that captivate, engage, and create
        meaningful impact.
      </span>
    </h3>
  )
}
