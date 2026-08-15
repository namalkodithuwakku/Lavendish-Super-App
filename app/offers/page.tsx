'use client';
import {useState} from 'react';
import {offers} from '@/lib/offers';
import {waLink} from '@/lib/hotels';
export default function Offers(){const [cat,setCat]=useState('All');const cats=['All','Family','Weekend','Events','Nature'];const list=cat==='All'?offers:offers.filter(o=>o.category===cat);return <>
 <section className="pageTop gradientTop"><p className="eyebrow">MEMBER & SEASONAL</p><h1>Offers</h1><p>Only the offers worth seeing — clean, current and easy to act on.</p></section>
 <div className="chips offerChips">{cats.map(c=><button key={c} className={cat===c?'active':''} onClick={()=>setCat(c)}>{c}</button>)}</div>
 <div className="offerList">{list.map(o=><article key={o.id} className="offerCard"><div className="offerImage" style={{backgroundImage:`url(${o.image})`}}><span>{o.badge}</span></div><div className="offerBody"><p className="eyebrow">{o.period}</p><h2>{o.title}</h2><p>{o.subtitle}</p>{o.hotel&&<small>{o.hotel}</small>}<div><a href={waLink(o.hotel||o.title)}>Check availability</a></div></div></article>)}</div>
 <p className="safeNote">Live prices are intentionally not invented here. Approved Lavendish campaign rates can be connected when available.</p>
 </>}
