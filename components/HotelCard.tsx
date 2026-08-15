'use client';
import Link from 'next/link';
import {useEffect,useState} from 'react';
import {Hotel,BOOKING_URL,waLink} from '@/lib/hotels';
import {PhoneIcon,WhatsAppIcon,HeartIcon} from './Icons';
export default function HotelCard({hotel}:{hotel:Hotel}){
 const [fav,setFav]=useState(false); const key=`fav:${hotel.slug}`;
 useEffect(()=>setFav(localStorage.getItem(key)==='1'),[key]);
 const toggle=()=>{const n=!fav;setFav(n);localStorage.setItem(key,n?'1':'0')};
 return <article className="hotelCard">
  <Link href={`/hotels/${hotel.slug}`} className="hotelPhoto"><img src={hotel.image} alt={hotel.name}/><button onClick={(e)=>{e.preventDefault();toggle()}} className="heart" aria-label="Save hotel"><HeartIcon filled={fav}/></button></Link>
  <div className="hotelCardBody"><div><p className="place">{hotel.destination}</p><Link href={`/hotels/${hotel.slug}`}><h3>{hotel.name}</h3></Link><p className="experience">{hotel.experience}</p></div>
  <div className="oneTouch"><a href={`tel:${hotel.phone||'+94752200202'}`} aria-label={`Call ${hotel.name}`}><PhoneIcon/><span>Call</span></a><a className="wa" href={waLink(hotel.name)} target="_blank"><WhatsAppIcon/><span>WhatsApp</span></a><a className="book" href={BOOKING_URL}>Book</a></div></div>
 </article>
}
