import React from "react";
import styles from "@/styles/About.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function about() {
  return (
    <div className={`${styles.container} ${inter.className}`}>
      <h2 className={styles.center}>All about BlogBusters</h2>
      <div>
        <h3>Introduction</h3>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
          explicabo obcaecati tempora ipsam est. Magnam earum officia labore
          consequuntur perspiciatis, deleniti tempora rerum minus voluptates
          dolores sint nulla illum dolorum. Veritatis perferendis libero eaque
          maxime, facere doloribus fuga corporis earum magnam? Recusandae nihil
          hic harum assumenda tempore doloribus libero consequatur impedit
          deserunt optio exercitationem delectus molestias nam, vitae ipsa animi
          aperiam sit voluptatem corporis, fuga velit consequuntur itaque ex
          earum. Voluptatibus deleniti, alias facere aliquid quae labore nihil,
          molestias quis architecto doloribus nemo, recusandae excepturi? Labore
          eaque obcaecati nulla omnis qui ipsum, dicta alias assumenda
          consequatur ea ad laudantium cum?
        </div>
      </div>
      <div>
        <h3>Our Services</h3>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          architecto, nostrum quasi amet magni eos officia illum. Voluptatum,
          dicta debitis!
        </div>
        <div>This are the services offered by us</div>
        <ul className={styles.servicelist}>
          <li>Services 1</li>
          <li>Services 2</li>
          <li>Services 3</li>
          <li>Services 4</li>
          <li>Services 5</li>
        </ul>
      </div>
      <div>
        <h3>Contact Us</h3>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque dolores magni corporis rerum. Cumque similique magnam, quae nam architecto molestiae.</div>
      </div>
    </div>
  );
}

export default about;
