import { format, parseISO } from 'date-fns'
import { useEffect } from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import Highlight from "react-highlight"
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import path from 'path'
import React from 'react'
import { PostType } from '../../types/post'
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'
import Header from '../../components/Header'
import rehypePrism from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'
import ImageComponent from '../../components/markdown/ImageComponent'
import LinkComponent from '../../components/markdown/LinkComponent'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  Head,
  Image,
  Link,
  ImageComponent,
  LinkComponent,
}

type PostPageProps = {
  source: MDXRemoteSerializeResult
  frontMatter: PostType
}

const PostPage = ({ source, frontMatter }: PostPageProps): JSX.Element => {


  return (
    <div className='mb-10'>
      <Header />

      <article className="mt-10 ml-10 mr-10 sm:mx-16 md:mx-24 lg:mx-32 xl:mx-40 ">
        <div className="">
          <h1
            className="  text-xl
          font-semibold md:text-2xl"
          >
            {frontMatter.title}
          </h1>
        </div>
        <div className="">
          <p className=" text-sm text-gray-500 dark:text-gray-400">
            {/* @ts-ignore */}
            {format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}
          </p>
        </div>
        <div className="  mt-4 max-w-3xl ">
          <p className="">{frontMatter.description}</p>
        </div>
        {/* <div className="mt-10">
          <img
            className="w-[230px] object-contain xl:w-[331px]"
            src={frontMatter.image}
          />
        </div> */}

        <div className="mt-10">
            <MDXRemote {...source} components={components} />
        </div>
      </article>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
        rehypePlugins: [
            rehypeCodeTitles,
            rehypePrism
        ]
    }, 
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

export default PostPage
