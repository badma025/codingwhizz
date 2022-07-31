import { GetStaticProps, NextPage } from 'next'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import PortableText from 'react-portable-text'
import Header from '../../../components/Header'
import { Post } from '../../../types'
import {sanityClient, urlFor} from "../../../sanity"
import { HeartIcon as HeartIconFill } from '@heroicons/react/solid'
import { HeartIcon as HeartIconOutline } from '@heroicons/react/outline'
import Comments from '../../../components/Comments'


interface Props {
  post: Post
}
interface IFormInput {
  _id: string
  name: string
  email: string
  comment: string
}

const Post: NextPage<Props> = ({ post }): JSX.Element => {
  const [liked, setLiked] = useState(false)
  return (
    <main>
      <Header />

      <div className="mx-auto mt-8 flex  max-w-3xl  flex-col text-lg font-semibold  tracking-wide ">
        <div className="ml-16 mt-10 text-lg">
          <h2>← Back to overview</h2>
        </div>
        <div className="ml-10 mt-10 text-xl md:text-2xl">
          <h2>{post.title}</h2>
          <h2 className="mt-2 text-gray-500">
            {new Date(post._createdAt).toLocaleString()} • {post.readingTime}
          </h2>
        </div>

        <div
          title={liked ? 'Unlike' : 'Like'}
          className="mt-2 ml-10 flex items-center space-x-2 text-red-600 "
        >
          {liked ? (
            <HeartIconFill
              onClick={() => setLiked(!liked)}
              className="h-10 cursor-pointer transition duration-300 ease-in-out hover:scale-110"
            />
          ) : (
            <HeartIconOutline
              onClick={() => setLiked(!liked)}
              className="h-10 cursor-pointer transition duration-300 ease-in-out hover:scale-110"
            />
          )}

          <h2>69</h2>
        </div>

        <div className="flex items-center justify-center ">
          <img className="h-48" src={urlFor(post.mainImage).url()!} alt="" />
        </div>
      </div>

      <article>
        <div className="mt-7">
          <PortableText
            className="text-start mx-auto mt-10 flex max-w-3xl  flex-col items-center justify-center p-5  font-normal"
            content={post.body}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          />
        </div>

        <div
          className="text-start mt-8  
        flex items-center justify-center  p-5 text-xl font-bold  tracking-wider
        "
        >
          <h1 className="text-[#3a6aff]">Conclusion</h1>
        </div>
        <PortableText
          className="text-start mx-auto  flex max-w-3xl  flex-col items-center justify-center p-5  font-normal"
          content={post.conclusion}
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        />
      </article>

      {/* <Comments/> */}
    </main>
  )
}

export default Post

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
   _id,
   slug {
    current
  },
 }`
  const posts = await sanityClient.fetch(query)
  // list of paths with the names (possible pages)
  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    likes,
    readingTime,
    author-> {
        name,
        image
    },
    'comments': *[
      _type == "comment" &&
      post._ref == ^._id &&
      approved == true],
    description,
    mainImage,
    slug,
    body,
    conclusion
 }
`
  // for each and every post (the slug is a parameter which we passed into the query)
  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  })
  // if no post exists we throw the 404
  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
    revalidate: 60, // after 60 seconds the page is regnerated
  }
}
