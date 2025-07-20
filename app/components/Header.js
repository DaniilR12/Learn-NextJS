import Link from "next/link";
import styles from './header.css'
export default function Header (){
  return (
    <header>
        <span>itProger</span>
        <nav>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
        </nav>
    </header>
  )
}
