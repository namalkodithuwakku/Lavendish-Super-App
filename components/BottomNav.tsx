'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {HomeIcon,HotelIcon,TagIcon,CalendarIcon,UserIcon} from './Icons';
const items=[['/','Home',HomeIcon],['/hotels','Hotels',HotelIcon],['/offers','Offers',TagIcon],['/my-stay','My Stay',CalendarIcon],['/profile','Profile',UserIcon]] as const;
export default function BottomNav(){const p=usePathname();return <nav className="bottomNav" aria-label="Main navigation">{items.map(([href,label,Icon])=>{const active=href==='/'?p===href:p.startsWith(href);return <Link key={href} href={href} className={active?'active':''}><Icon/><span>{label}</span></Link>})}</nav>}
