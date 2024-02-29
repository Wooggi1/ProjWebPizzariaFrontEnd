import { useContext } from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

import { FiLogOut } from 'react-icons/fi'

import { AuthContext } from '@/contexts/AuthContext'

export function Header(){
  const { signOut } = useContext(AuthContext)

  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href='dashboard'>
          <img src='/logo.svg' width={190} height={90}></img>
        </Link>

        <nav className={styles.menuNav}>
          <Link href='/category' legacyBehavior={true}>
            <a>Categoria</a>
          </Link>
          <Link href='/product' legacyBehavior={true}>
            <a>Cardapio</a>
          </Link>

          <button onClick={signOut}>
            <FiLogOut color='#FFF' size={24} />
          </button>
        </nav>
      </div>
    </header>
  )
}