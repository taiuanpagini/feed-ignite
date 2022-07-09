import React from 'react'

import styles from './Avatar.module.scss';

export function Avatar({hasBorder = true, src}) {
  return (
    <img
      alt="avatar"
      src={src} 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
    />
  )
}
