// we store our types here
export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  readingTime: string;
  author: {
    name: string;
    image: string;
  };
  comments: Comment[]
  likes: string;
  description: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
  body: object[];
  conclusion: object[];
}

export interface Comment {
  approved: boolean;
  comment: string;
  email: string;
  userName: string;
  post: {
    _ref: string;
    type: string;
  };
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}
