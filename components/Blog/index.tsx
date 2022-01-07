import marked from "marked";
import { NextPage } from "next";
import Image, { ImageLoader } from "next/image";
import Link from "next/link";
import "react-multi-carousel/lib/styles.css";
import strings from "../../public/strings.json";
import blogStyle from "../../styles/blog.module.css";
import publishIcon from "../../components/assets/publishdate.svg";



const { baseUrl } = strings;
const myLoader: ImageLoader = (url: any) => {
  return url;
};

const myLoaderBlog = ({ src, width, quality }: any) => {
  const origin = typeof window !== "undefined" && window.location.origin;
  return `${origin}/${src}?w=${width}&q=${quality || 75}`;
};

const Blog: NextPage = (props: any) => {
  const {
    blogs,
    sub_heading,
    free_text,
    blog_text,
    blog_title,
    publishdate,
    blogimage,
    type,
    blog_short_text,
    _id,
    uid
  } = props;

  switch (type) {
    case "blog":
      return (
        <div>
          <div className={blogStyle.compo}>
            {blogimage && (
              <Image
                loader={() => myLoader((baseUrl + blogimage.url) as any)}
                src={baseUrl + blogimage.url}
                placeholder="blur"
                blurDataURL={baseUrl + blogimage.url}
                height={182}
                width={361}
                className={blogStyle.bannerimg}
              />
            )}
            <div className={blogStyle.banner_container}>
              {blog_title && (
                <div className={blogStyle.content}>
                  <div className={blogStyle.free_text}
                  >
                    <Link href={`/blog/${uid}`}>
                      <a>{blog_title}</a>
                    </Link>

                  </div>
                  {blog_text && (
                    <div
                      className={blogStyle.descrption}
                      dangerouslySetInnerHTML={{ __html: marked(blog_short_text) }}
                    ></div>
                  )}
                  {publishdate && (
                    <div className={blogStyle.publishcontent}>
                      <Image
                        loader={myLoaderBlog}
                        src={publishIcon}
                        alt="Picture of the author"
                        width={18}
                        height={18}
                      />
                      <p className={blogStyle.publishtitle}> {publishdate}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      );

    // case "blog_banner":
    //   return (
    //     <div>
    //       <div className={blogStyle.page}>
    //         <Pagination >
    //           <Pagination.Prev />
    //           <Pagination.Item key={1} active={true}>
    //             1
    //           </Pagination.Item>
    //           <Pagination.Item key={2}>2</Pagination.Item>
    //           <Pagination.Item key={3}>3</Pagination.Item>
    //           <Pagination.Next />
    //         </Pagination>
    //       </div>
    //     </div>
    //   );

    default:
      return (
        <div>

        </div>
      );
  }
};

export default Blog;
