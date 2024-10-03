import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import blogs from "../styles/Blog.module.css";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
// import { readdir, readFile } from 'node:fs/promises';
import InfiniteScroll from 'react-infinite-scroll-component';

function blog(props) {
  let [blog, setBlog] = useState([]);
  let [allLength,setAllLength] = useState(0);
  useEffect(() => {
    // console.log(props);
    // setBlog(props.dirsContent);
    (async () => {
      let allData = await fetch("http://localhost:3000/api/blogLists?count=all");
      let dirsPath = (await allData.json()).dirsContent;
      console.log(dirsPath);
      // console.log((await allData.json()).dirsContent.length);
      setAllLength(dirsPath.length);
      let response = await fetch("http://localhost:3000/api/blogLists?count=5");
      let responseData = await response.json();
      // console.log(responseData.dirsContent);
      setBlog(responseData.dirsContent);
    })();
  }, []);

  const fetchData = ()=>{
    (async ()=>{
      // setTimeout(()=>{},7000);
      let nextData = await fetch(`http://localhost:3000/api/blogLists?count=${blog.length+5}`);
      setBlog((await nextData.json()).dirsContent);
    })();
  }
  return (
    <>
      <div className={`${styles.blogs} ${inter.className}`}>
        <h3>Latest Blogs</h3>
      </div>
      <div className={`${blogs.main} ${inter.className}`}>
        <InfiniteScroll
          style={{display:"flex",flexDirection:"column",alignItems:"center"}}
          dataLength={blog.length} //This is important field to render the next data
          next={fetchData}
          hasMore={blog.length!==allLength}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          // below props only if you need pull down functionality
          // refreshFunction={this.refresh}
          // pullDownToRefresh
          // pullDownToRefreshThreshold={50}
          // pullDownToRefreshContent={
          //   <h3 style={{ textAlign: "center" }}>
          //     &#8595; Pull down to refresh
          //   </h3>
          // }
          // releaseToRefreshContent={
          //   <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
          // }
        >
          {blog.map((item) => {
            return (
              <Link
                className={`${styles.card} ${blogs.card}`}
                href={`/blogposts/${item.title.split(" ").join("_")}`}
                key={item.title}
              >
                <h2>
                  {item.title} <span>-&gt;</span>
                </h2>
                <p>{item.title}</p>
                <p>{item.metadesc}</p>
              </Link>
            );
          })}
        </InfiniteScroll>
        {/* {blog.map((item) => {
          return (
            <Link
              className={`${styles.card} ${blogs.card}`}
              href={`/blogposts/${item.title.split(" ").join("_")}`}
              key={item.title}
            >
              <h2>
                Blog 1 <span>-&gt;</span>
              </h2>
              <p>{item.title}</p>
              <p>{item.metadesc}</p>
            </Link>
          );
        })} */}
      </div>
    </>
  );
}

export default blog;
// export async function getServerSideProps(context) {
//   let response = await fetch("http://localhost:3000/api/blogLists");
//   let responseData = await response.json();
// console.log(responseData);
// console.log(context.resolvedUrl);
//   return { props: responseData };
// }
// export async function getStaticProps(context) {
//   let dirs = await readdir("blogs");
//   let dirsContent = [];
//   for (let index = 0; index < dirs.length; index++) {
//     const element = dirs[index];
//     let content = await readFile("blogs/" + element, "utf-8");
//     dirsContent.push(JSON.parse(content));
// console.log(content);
// }

// let response = await fetch("http://localhost:3000/api/blogLists");
// let responseData = await response.json();
// console.log(dirsContent);
// return { props: {dirsContent} };
// }
