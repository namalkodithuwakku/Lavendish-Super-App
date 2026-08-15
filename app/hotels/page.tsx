'use client';
import {useMemo,useState} from 'react';
import HotelCard from '@/components/HotelCard';
import {hotels} from '@/lib/hotels';
export default function Hotels(){const [q,setQ]=useState('');const [filter,setFilter]=useState('All');const filters=['All','Beach','Kandy','Kataragama','Wildlife','Heritage','Lake']; const list=useMemo(()=>hotels.filter(h=>(filter==='All'||`${h.destination} ${h.experience}`.toLowerCase().includes(filter.toLowerCase()))&&`${h.name} ${h.destination} ${h.experience}`.toLowerCase().includes(q.toLowerCase())),[q,filter]);return <>
 <section className="pageTop"><p className="eyebrow">10 HOTELS · SRI LANKA</p><h1>Hotels</h1><p>Find the stay that feels right, then call, WhatsApp or book in one touch.</p></section>
 <div className="searchBox"><span>⌕</span><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search hotel or destination"/></div>
 <div className="chips">{filters.map(f=><button key={f} className={filter===f?'active':''} onClick={()=>setFilter(f)}>{f}</button>)}</div>
 <div className="hotelList">{list.map(h=><HotelCard hotel={h} key={h.slug}/>)}</div>
 </>}
