import React from 'react'
import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from '../Avatar';

import styles from './Comment.module.scss';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/taiuanpagini.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Taiuan Pagini</strong>

              <time title='11 de maio as 08:00 horas' dateTime='2022-05-11 08:00:00'>Cerca de 1h atrás</time>
            </div>

            <button title='Excluir comentário'>
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bem Devon, parabéns</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
