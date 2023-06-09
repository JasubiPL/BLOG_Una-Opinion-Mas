import styles from "@/styles/AuthorAvatar.module.css" 
import Link from "next/link";

export default function AuthorAvatar({ authorName, width, height,color}) {
  if(color === 'white'){
    return (
      <div className={styles.author}>
        <span className={styles.author_img}>
          <img src={authorName === 'JasubiP' ? '/img/authors/jasubi.jpg' :
              authorName === 'Erik Guzmán' ? '/img/authors/erik.jpeg' :
              authorName === 'Gabojin360' ? '/img/authors/gabojin360.jpg' : '/img/authors/default-icon.png'}
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
  }
  return (
    <div className={styles.author}>
      <span className={styles.author_img}>
        <img 
          src={authorName === 'JasubiP' ? '/img/authors/jasubi.jpg' :
          authorName === 'Erik Guzmán' ? '/img/authors/erik.jpeg' :
          authorName === 'Gabojin360' ? '/img/authors/gabojin360.jpg' : '/img/authors/default-icon.png'}
          width={width} 
          height={height} 
          loading="lazy" 
          alt="Autor del Blog"
        />
      </span>
      <span className={styles.author_name_blue}>
        {authorName}
      </span>
    </div>
  );


};
