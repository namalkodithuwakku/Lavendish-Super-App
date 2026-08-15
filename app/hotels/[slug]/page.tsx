import {notFound} from 'next/navigation';
import Link from 'next/link';
import {hotelBySlug,BOOKING_URL,waLink,CENTRAL_PHONE} from '@/lib/hotels';
import {PhoneIcon,WhatsAppIcon,MapIcon,HeartIcon,Chevron} from '@/components/Icons';

export default async function HotelPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const h=hotelBySlug(slug); if(!h)return notFound();
 return <>
 <section className="detailHero premiumDetailHero"><img src={h.image} alt={`${h.name} property`}/><span className="detailHeroShade"/><Link href="/hotels" className="backButton">‹</Link><button className="detailHeart"><HeartIcon/></button><div className="detailHeroCaption"><span>{h.destination}</span><strong>{h.name}</strong></div></section>
 <section className="hotelDetailIntro premiumHotelDetailIntro"><p className="eyebrow">LAVENDISH COLLECTION · {h.destination}</p><h1>{h.name}</h1><p className="rating">{h.experience}</p><p className="desc">{h.description}</p></section>
 <section className="stickyActions premiumStickyActions"><a className="call" href={`tel:${h.phone||CENTRAL_PHONE}`}><PhoneIcon/><span>Call</span></a><a className="wa" href={waLink(h.name)}><WhatsAppIcon/><span>WhatsApp</span></a><a className="book" href={BOOKING_URL}>Book now <Chevron/></a></section>
 <section className="detailBlock"><div className="sectionHead"><div><p className="eyebrow">YOUR STAY</p><h2>Comfort, kept simple</h2></div></div><div className="infoPanel premiumInfoPanel"><p>{h.room}</p><a href={BOOKING_URL}>See rates & availability <Chevron/></a></div></section>
 <section className="detailBlock"><div className="sectionHead"><div><p className="eyebrow">AT A GLANCE</p><h2>Why guests choose it</h2></div></div><div className="featureGrid premiumFeatureGrid">{h.tags.map(t=><div key={t}><span>✦</span><strong>{t}</strong></div>)}<div><MapIcon/><strong>{h.destination}</strong></div></div></section>
 <section className="locationCard premiumLocationCard"><div><p className="eyebrow">LOCATION</p><h2>{h.address}</h2><p>Open directions in one touch when you are ready to travel.</p></div><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.address)}`} target="_blank"><MapIcon/> Directions</a></section>
 </>}
