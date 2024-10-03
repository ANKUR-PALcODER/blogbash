import { readFile } from "node:fs/promises";
// import * as fs from "fs";

export default async function handler(req, res) {
  // console.log(req.query["file"]);
  // var fileData = {};
  const fileData = await readFile(`blogs/${req.query["file"]}.json`, "utf-8");
  // console.log(typeof fileData);
  res.status(200).json(JSON.parse(fileData));
  // readFile(`blogs/${req.query["file"]}.json`, "utf-8", (err, data) => {
  //   fileData = JSON.parse(data);
  //   console.log(fileData);
  //   res.status(200).json(fileData);
  // });
  // res.status(200).json({"err":"Can't read file"});
}
