"use client"
import styles from '@/styles/dashboard/SetPost.module.css'
import axios from 'axios';
import { useState } from 'react';

export default function SetPost() {
  const [imgPoster, setImgPoster] = useState()
  const [imgWallaper, setImgWallpaper] = useState()
  const [imagePost, setImagePost] = useState({poster:'', wallpaper:''})
  const [data, setData] = useState({
    title: '',
    description: '',
    keywords: '',
    topic: '',
    author: '',
    content:'',
    poster: '',
    wallpaper:''
  })

  const handlerChange = (e) =>{
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
    
  }

  const handlerSubmit = async (e) =>{
    e.preventDefault()
    //console.log(data)

    const form = new FormData()
    form.append('poster',  imagePost.poster)
    form.append('wallpaper',  imagePost.wallpaper)
    
    const res = await axios.post('https://server-una-opinion-mas-production.up.railway.app/', form)
    const {pathImage} = res.data
    console.log(pathImage)

    setData({
      ...data,
      poster: pathImage.poster,
      wallpaper: pathImage.wallpaper
    })

    if(res.status === 200) sendData()

    
  }

  const sendData = async () =>{
    console.log(data.poster)
    const res = await axios.post('./api/upload/newPost', data)
    console.log(res)
  }

  const handlePoster = async (e) => {
    const poster = e.target.files[0]
    
    setImagePost({
      ...imagePost,
      [e.target.name]: poster
    })
    

    const imgUrl = URL.createObjectURL(poster)
    //console.log( imgUrl)
    setImgPoster(imgUrl)
  }

  const handleWallpaper = (e) => {
    const wallpaper = e.target.files[0]
    setImagePost({
      ...imagePost,
      [e.target.name]: wallpaper
    })

    const imgUrl = URL.createObjectURL(wallpaper)
    //console.log( imgUrl)
    setImgWallpaper(imgUrl)
  }

  //console.log(data)

  return (
    <section className={styles.set_post}>
      <form onSubmit={handlerSubmit}>
        <header className={styles.set_post_header}>
          <h2>Nuevo Artículo</h2>
          <button>Publicar</button>
        </header>
        <label htmlFor="title">Nombre del Artículo</label>
        <input type="text" name='title' value={data.title} onChange={handlerChange}/>

        <label htmlFor="description">Descripción</label>
        <input type="text" name='description' value={data.description} onChange={handlerChange}/>

        <label htmlFor="keywords">Palabras Clave</label>
        <input type="text" name='keywords' value={data.keywords} onChange={handlerChange}/>

        <div className={styles.select_container}>
          <label htmlFor="Tema">Tema</label>
          <select name='topic' value={data.topic} onChange={handlerChange}>
            <option>Seleccionar</option>
            <option value="Cine">Cine</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Curiosidades">Curiosidades</option>
            <option value="Desarrollo de Software">Programación</option>
            <option value="Reflexión">Reflexión</option>
            <option value="Gaming">Gaming</option>
          </select>

          <label htmlFor="Tema">Autor</label>
          <select name='author' value={data.author} onChange={handlerChange}>
            <option>Seleccionar</option>
            <option value="JasubiP">Jasubi Piñeyro</option>
            <option value="Erik Guzmán">Erik Guzmán</option>
            <option value="Gabojin360">Gabojin360</option>
          </select>
        </div>

        <label htmlFor="content">Contenido</label>
        <textarea type="text" name='content' value={data.content} onChange={handlerChange}/>

        <div className={styles.update_image_container}>
          <label htmlFor="poster">Imagen de Portada</label>
          <div className={styles.custom_file_input}>
            <input type="file" name='poster' onChange={(e) => handlePoster(e)}/>
            <div className={styles.custom_button}>Subir Portada</div>
          </div>
          <dir className={styles.update_image_preview}>
            <img src={imgPoster} />
          </dir>
        </div>
        <div className={styles.update_image_container}>
          <label htmlFor="wallpaper">Imagen de Cabecera</label>
          <div className={styles.custom_file_input}>
            <input type="file" name='wallpaper' onChange={(e) => handleWallpaper(e)}/>
            <div className={styles.custom_button}>Subir Wallpaper</div>
          </div>
          <dir className={styles.update_image_preview}>
            <img src={imgWallaper} />
          </dir>
        </div>
        
      </form>
    </section>
  );
};
