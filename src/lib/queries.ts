export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  slug,
  excerpt,
  body,
  publishedAt,
  readingTime,
  "category": category->title,
  "tags": tags[]->title,
  "author": author->name,
  "authorImage": author->image.asset->url,
  "relatedPosts": relatedPosts[]->_id,
  isFeatured,

  downloadResource {
    title,
    description,
    "url": file.asset->url
  },

  featuredImage{
  asset->{
    url
  },
  alt
},
ogTitle,
ogDescription,
ogImage{
  asset->{
    url
  },
  alt
},
twitterTitle,
twitterDescription,
twitterImage{
  asset->{
    url
  },
  alt
}
}`;