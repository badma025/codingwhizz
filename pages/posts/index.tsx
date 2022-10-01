import { format, parseISO } from 'date-fns'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Header from '../../components/Header'
import { getAllPosts } from '../../lib/api'
import { PostType } from '../../types/post'

type IndexProps = {
  posts: PostType[]
}

const Posts = ({ posts }: IndexProps) => {
  return (
    <div>
      <Header />
      {posts.map((post) => (
        <article
          key={post.slug}
          className="mx-auto mt-12 max-w-3xl xl:max-w-5xl"
        >
          <p className="md:text-md mx-4 mb-1 text-sm text-gray-500 dark:text-gray-400 md:mx-0">
            {/* @ts-ignore */}
            {format(parseISO(post?.date), 'MMMM dd, yyyy')}
          </p>
          <h1 className="mb-2 text-xl">
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a
                className="text-md md:text-md 
              mx-4 text-gray-900 dark:text-white 
              dark:hover:text-[#3a6aff] md:mx-0"
              >
                {post.title}
              </a>
            </Link>
          </h1>
          <p className="md:text-md mx-4 mb-3 xs:text-xs ">{post.description}</p>
          <p className="mx-4 md:mx-0">
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a>Read More</a>
            </Link>
          </p>
        </article>
      ))}
    </div>
  )
}

export default Posts

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title'])

  return {
    props: { posts },
  }
}
