import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "@/styles/BlogPost.module.css";
import axios from "axios";
// import { readdir, readFile } from 'node:fs/promises';
// import * as fs from "fs";

export default function slug(props) {
  const { query, isReady } = useRouter();
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    // setHeading(props.fileData.title);
    // setContent({__html : props.fileData.content});
    // console.log(query);
    if(isReady) {
      // console.log(query);
      setHeading(query.slug);
      // console.log(query.slug);
      (
        async () => {
        // const response = await axios.get(
        //   "http://localhost:3000/api/blogEndPoint",
        //   {
        //     params: {
        //       file: query.slug,
        //     },
        //   }
        // );
        const slug = query.slug;
        console.log(slug);
        const response = await fetch(`http://localhost:3000/api/blogEndPoint?file=${slug}`,{mode: 'no-cors',method:"GET"});
        const parsedData = await response.json();
        // console.log(parsedData);
        setContent(parsedData.content);
        // setContent(response.data.content);
      })();
    }
    // console.log(router.query.slug+"sfdg");
    // const heading = typeof router.query.slug.split("_");
    // console.log(heading);
  }, [isReady]);
  // }, []);
  // console.log(query.slug);
  return (
    <>
      <div className={styles.main}>
        <h1>{heading.split("_").join(" ")}</h1>
        <hr />
        <div>{content}</div>
      </div>
    </>
  );
}

// export async function getStaticPaths() {
//   // let dirs = await readdir("blogs");
//   return {
//     paths: [
//       {
//         params:{slug : "How_to_Learn_HTML"}
//       },
//       {
//         params:{slug : "How_to_Learn_JavaScript"}
//       },
//       {
//         params:{slug : "How_to_Learn_NextJS"}
//       },
//       {
//         params:{slug : "How_to_Learn_NodeJS"}
//       },
//     ],
//     fallback: false, // false or "blocking"
//   };
// }

// export async function getStaticProps(context) {
//   // console.log(context);
//   let fileData = JSON.parse(await fs.promises.readFile(`blogs/${context.params.slug}.json`,'utf-8'));
//   console.log(typeof fileData);
//   // fs.readFile(`blogs/${context.params.slug}.json`, "utf-8", (err, data) => {
//   //   fileData = JSON.parse(data);
//   // });
//   return { props: {fileData} };
// }
