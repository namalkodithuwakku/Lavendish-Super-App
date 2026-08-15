'use client';
import Link from 'next/link';
import {BellIcon} from './Icons';

export default function AppHeader(){
  return <header className="appHeader">
    <Link href="/" className="brandMini" aria-label="Lavendish Leisure home">
      <span className="logoPlate"><img src="/brand/lavendish-logo.jpeg" alt="Lavendish Leisure Hotels & Resorts"/></span>
    </Link>
    <button className="iconButton" aria-label="Notifications"><BellIcon/><span className="dot"/></button>
  </header>
}
