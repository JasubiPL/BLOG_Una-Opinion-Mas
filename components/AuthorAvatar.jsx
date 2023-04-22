import Image from "next/image";
import styles from "@/styles/AuthorAvatar.module.css" 

export default function AuthorAvatar({ authorName, width, height}) {
  return (
    <div className={styles.author}>
      <span className={styles.author_img}>
        <img src={authorName === 'JasubiP' ? '/img/authors/jasubi.jpg' : '/img/authors/erik.jpeg'}
          width={width} 
          height={height} 
          loading="lazy" 
          alt="Autor del Blog"
        />
      </span>
      <span className={styles.author_name}>
        {authorName}
      </span>
    </div>
  );
};
