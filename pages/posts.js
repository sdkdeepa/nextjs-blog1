import React from 'react'
import Link from 'next/link'
const posts = () => {
  return (
    <div>
      <div>
      <Link href="/posts/new">Go to new posts</Link>
      <br/>
      <Link href="/posts/old">Go to old posts</Link>
    </div>
    </div>
  )
}
export default posts


