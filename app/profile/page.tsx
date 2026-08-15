'use client';
import {useEffect,useState} from 'react';
import {HeartIcon,BellIcon,Chevron,UserIcon} from '@/components/Icons';
export default function Profile(){const [name,setName]=useState('');const [draft,setDraft]=useState('');useEffect(()=>{const n=localStorage.getItem('lavendish:name')||'';setName(n);setDraft(n)},[]);const save=()=>{localStorage.setItem('lavendish:name',draft.trim());setName(draft.trim())};return <>
 <section className="pageTop"><p className="eyebrow">LAVENDISH MEMBERS</p><h1>{name?`Hello, ${name}`:'Your profile'}</h1><p>A simple member space now, ready for loyalty, vouchers and connected stays later.</p></section>
 {!name&&<section className="joinCard"><div className="profileOrb"><UserIcon/></div><h2>Become a Lavendish Member</h2><p>Save favourites and prepare for exclusive member benefits.</p><input value={draft} onChange={e=>setDraft(e.target.value)} placeholder="Your first name"/><button onClick={save}>Join on this device</button><small>Prototype membership only — no personal data is sent anywhere.</small></section>}
 {name&&<section className="profileCard"><div className="avatar">{name[0]?.toUpperCase()}</div><div><p className="eyebrow">MEMBER</p><h2>{name}</h2><p>Welcome to your Lavendish space.</p></div></section>}
 <section className="settingsList"><div><span><HeartIcon/>Saved hotels</span><Chevron/></div><div><span><BellIcon/>Notifications</span><Chevron/></div><div><span>◇ Member benefits</span><Chevron/></div><div><span>⌘ Help & contact</span><Chevron/></div></section>
 {name&&<button className="textButton" onClick={()=>{localStorage.removeItem('lavendish:name');setName('');setDraft('')}}>Sign out on this device</button>}
 </>}
