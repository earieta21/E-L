import React from 'react';
import Style from './BlogStyle.module.css'; // Importa tu archivo de estilos CSS module

const Blog = () => {
  // Datos de ejemplo para los posts del blog
  const posts = [
    {
      id: 1,
      title: 'Título del Post 1',
      author: 'Autor 1',
      date: '1 de junio de 2024',
      content: 'Contenido del primer post del blog...',
      imageUrl: 'url_de_la_imagen_1.jpg'
    },
    {
      id: 2,
      title: 'Título del Post 2',
      author: 'Autor 2',
      date: '5 de junio de 2024',
      content: 'Contenido del segundo post del blog...',
      imageUrl: 'url_de_la_imagen_2.jpg'
    },
    // Agrega más posts según sea necesario
  ];

  return (
    <div>
      <section className={Style.blog}>
        <h2>Nuestro Blog</h2>
        <div className={Style.posts}>
          {posts.map(post => (
            <div key={post.id} className={Style.post}>
              <img src={post.imageUrl} alt={post.title} className={Style.postImage} />
              <div className={Style.postContent}>
                <h3 className={Style.postTitle}>{post.title}</h3>
                <p className={Style.postMeta}>
                  Publicado por {post.author} el {post.date}
                </p>
                <p className={Style.postExcerpt}>{post.content.substring(0, 150)}...</p>
                <a href="#" className={Style.button}>Leer más</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blog;
