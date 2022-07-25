// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sanityClient from '@sanity/client'

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
}

const client = sanityClient(config)

export default async function createMessage(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // we parse the request body to destructure all these values which we can work with
  const { name, email, message } = JSON.parse(req.body)

  try {
    // creating a new post in the sanity CMS
    await client.create({
      _type: 'message',
      name,
      email,
      message,
    })
  } catch (error) {
    return res.status(500).json({ message: "Couldn't submit message.", error })
  }
  console.log('Message Submitted')
  return res.status(200).json({ message: 'Comment submitted' })
}
