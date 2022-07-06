import styles from './Header.module.scss'

import igniteLogo from '../../img/ignite-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo ignite" />
    </header>
  )
}
