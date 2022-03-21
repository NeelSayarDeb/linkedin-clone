import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Herobanner from '../components/Herobanner'
import Posts from '../components/Posts'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'

interface Props {
  posts: [Post]
}

const Home: NextPage<Props> = ({ posts }: Props) => {
  return (
    <div className="font-sans">
      <Head>
        <title>RiteUps</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Herobanner />
      <div className="mx-auto flex grid max-w-7xl grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
        {posts.map((post) => (
          <Posts key={post._id} post={post} />
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author -> {
    name,
    image
  },
  description,
  mainImage,
  slug
  }`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}

export default Home
