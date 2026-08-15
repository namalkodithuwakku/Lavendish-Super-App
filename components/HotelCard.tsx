'use client';
import Link from 'next/link';
import {useEffect,useState} from 'react';
import {Hotel,BOOKING_URL,waLink} from '@/lib/hotels';
import {PhoneIcon,WhatsAppIcon,HeartIcon,Chevron} from './Icons';

export default function HotelCard({hotel}:{hotel:Hotel}){
 const [fav,setFav]=useState(false); const key=`fav:${hotel.slug}`;
 useEffect(()=>setFav(localStorage.getItem(key)==='1'),[key]);
 const toggle=()=>{const n=!fav;setFav(n);localStorage.setItem(key,n?'1':'0')};
 return <article className="hotelCard premiumHotelCard">
  <Link href={`/hotels/${hotel.slug}`} className="hotelPhoto premiumHotelPhoto">
    <img src={hotel.image} alt={`${hotel.name} property`}/>
    <span className="photoShade"/>
    <span className="propertyBadge">{hotel.destination}</span>
    <button onClick={(e)=>{e.preventDefault();toggle()}} className="heart" aria-label="Save hotel"><HeartIcon filled={fav}/></button>
    <div className="photoTitle"><small>{hotel.experience}</small><strong>{hotel.name}</strong></div>
  </Link>
  <div className="hotelCardBody premiumHotelBody">
    <p className="hotelMicroCopy">Explore the property, then connect or reserve in one touch.</p>
    <div className="oneTouch premiumActions">
      <a className="call" href={`tel:${hotel.phone||'+94752200202'}`} aria-label={`Call ${hotel.name}`}><PhoneIcon/><span>Call</span></a>
      <a className="wa" href={waLink(hotel.name)} target="_blank"><WhatsAppIcon/><span>WhatsApp</span></a>
      <a className="book" href={BOOKING_URL}>Book <Chevron/></a>
    </div>
  </div>
 </article>
}
