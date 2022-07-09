import React from 'react'

import styles from './FormComment.module.scss';

export function FormComment() {
  return (
    <form className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>

      <textarea placeholder='Deixe um comentário'/>

      <footer>
        <button type="submit">Publicar</button>
      </footer>
    </form>
  )
}
