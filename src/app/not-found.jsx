import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div>
        <h1>This page cannot be found</h1>
        <Link href={"/"}>Go to Home</Link>
    </div>
  )
}
