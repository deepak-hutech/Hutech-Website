
import { baseUrl } from "../../public/strings.json";

const Article = ({ article }:any) => {
  // console.log(article);
return (
  <div>{article.blog_title}</div>
);
};
export async function getStaticPaths() {
 const blogResult = await fetch(`${baseUrl}/blog-pages`);

 const blogs: any = await blogResult.json();
//  console.log(blogs, "blogs")

return {
  paths: blogs.map((blog: any) => ({
    params: {
      uid: blog.uid,
    },
  })),
  fallback: false,
};
}
export async function getStaticProps({ params }: any) {

  console.log(params, "parama")
  // const allBlogResult = await fetch(`${baseUrl}/blog-pages`);
  // const allBlogs: any = await allBlogResult.json();
  const blogResult = await fetch(`${baseUrl}/blog-pages?uid=${params.uid}`);
  const blog: any = await blogResult.json();

// const articles = await fetchAPI(
//   `/articles?link=${params.link}`
// );
return {
  props: { article: blog[0], },
  revalidate: 1
};
}
export default Article;