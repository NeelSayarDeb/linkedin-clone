import { urlFor } from '../sanity'
import Link from 'next/link'

function Posts({ post }) {
  return (
    <Link href={`/post/${post.slug.current}`}>
      <div className="group cursor-pointer overflow-hidden rounded-lg border">
        <img
          className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
          src={urlFor(post.mainImage).url()}
          alt={post.title}
        />
        <div className="flex flex-col justify-between bg-white p-5">
          <div>
            <p className="text-lg font-bold">{post.title}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm">
              Written by <span className="font-bold">{post.author.name}</span>
            </p>
            <img
              className="h-10 w-10 rounded-full"
              src={urlFor(post.author.image).url()}
              alt=""
            />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Posts
