import React from 'react'
import { PencilLine } from 'phosphor-react'

import { Avatar } from '../Avatar';

import styles from './Sidebar.module.scss'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
      className={styles.cover}
      src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=40" alt="" />

      <div className={styles.profile}>
      <Avatar src="https://github.com/taiuanpagini.png" />

        <strong>Taiuan Pagini</strong>
        <span>Front End Senior</span>
      </div>

      <footer>
        <a href="#"><PencilLine size={20} />  Editar meu perfil</a>
      </footer>
    </aside>
  )
}
