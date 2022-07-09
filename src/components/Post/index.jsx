import React from 'react'
import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import { FormComment } from '../FormComment';

import styles from './Post.module.scss';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
        <Avatar src="https://github.com/taiuanpagini.png" />

          <div className={styles.authorInfo}>
            <strong>Taiuan Pagini</strong>
            <span>Web Developer</span>
          </div>
        </div>
        
        <time title='11 de maio as 08:00 horas' dateTime='2022-05-11 08:00:00'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉{' '}<a href="">jane.design/doctorcare</a></p>

        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <FormComment />

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
