import {readdir,writeFile} from "node:fs/promises"

export default async function handler(req, res) {
    const contactlength = await readdir("contacts");
    // console.log(req.body);
    await writeFile(`contacts/${contactlength.length+1}.json`,req.body,"utf-8");
    // console.log(contactlength);
    res.status(200).json({ msg: "Thanks for contacting us" });
  }
  