import { readdir, readFile } from "node:fs/promises";
export default async function handler(req, res) {
  let dirs = await readdir("blogs");
  let dirsContent = [];
  let length = 0;
  //   let length = req.query["count"] === "all" ? (dirs.length) : (req.query["count"]);
  if (req.query["count"] === "all" || req.query["count"] >= dirs.length) {
    length = dirs.length;
  } else if (req.query["count"] < dirs.length) {
    length = parseInt(req.query["count"]);
  }
  // console.log(typeof length);
  for (let index = 0; index < length; index++) {
    const element = dirs[index];
    let content = await readFile("blogs/" + element, "utf-8");
    dirsContent.push(JSON.parse(content));
    // console.log(content);
  }
  res.status(200).json({ dirsContent });
}
