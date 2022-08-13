import { GetStaticProps, NextPage } from 'next'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Featured from '../../components/Featured'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Latest from '../../components/Latest'
import Search from '../../components/Search'
import { sanityClient, urlFor } from '../../sanity'
import { Post } from '../../types'

interface IProps {
  posts: Post[]
}

const Blog: NextPage<IProps> = ({ posts }) => {
  const { theme, setTheme } = useTheme()
  setTheme(theme)
  return (
    <div>
      <main
        className="font-Poppins  mx-auto min-h-screen max-w-[1500px] bg-[#E7E0CF] text-black dark:bg-[#181f30]
       dark:text-white"
      >
        <Header />
        <Search />

        <section className="mx-auto mt-20 max-w-7xl">
          <div className="mx-auto flex flex-col items-center justify-center space-y-1 text-sm font-bold md:text-lg lg:text-2xl xl:-mb-16">
            <h2 className="">Latest Posts</h2>
            <h2 className="text-[#3a66ff]">
              High quality posts made with love :)
            </h2>
          </div>

          <section className=" mx-6 grid  grid-cols-1 items-center justify-center gap-3 p-2 sm:grid-cols-2 md:mx-auto md:gap-6 md:p-6 lg:grid-cols-3">
            {posts.map((post: Post) => {
              return (
                <div
                  className="group
             w-full cursor-pointer space-y-3 overflow-hidden    rounded-lg  border-2 border-gray-500 p-6 xl:mt-24"
                >
                  <Link href={`https://codingwhizz.org/blog/article/${post.slug.current}`}>
                  <img
                    className="h-60 w-full object-cover transition-transform duration-100 ease-in-out group-hover:scale-105"
                    src={urlFor(post.mainImage).url()!}
                    alt="writing image"
                  />
                  </Link>
                  <h2 className="text-gray-500">
                    {new Date(post._createdAt).toLocaleString()} •{' '}
                    {post.readingTime}
                  </h2>
                  <h2>{post.title}</h2>
                </div>
              )
            })}
          </section>
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default Blog

export const getStaticProps: GetStaticProps = async () => {
  const query = `*[_type == "post"]{
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
  const posts = await sanityClient.fetch(query)
  // if no post exists we throw the 404
  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts,
    },
    revalidate: 60, // after 60 seconds the page is regnerated
  }
}
