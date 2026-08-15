import Link from 'next/link';
import HotelCard from '@/components/HotelCard';
import {hotels,BOOKING_URL,waLink,CENTRAL_PHONE} from '@/lib/hotels';
import {offers} from '@/lib/offers';
import {PhoneIcon,WhatsAppIcon,CalendarIcon,TagIcon,Chevron} from '@/components/Icons';

const HERO_IMAGE='https://cf.bstatic.com/xdata/images/hotel/max1024x768/707036004.jpg?hp=1&k=7e90322d9be9cc1404a1ea1e6a5c5c1ee453ed7bf77c9b13a37a6c22a5d6ed8b&o=';

export default function Home(){
 const featured=hotels.find(h=>h.slug==='grand-tamarind-lake') || hotels[0];
 return <>
 <section className="welcome"><div><p>Good evening,</p><h1>Welcome to <span>Lavendish</span></h1></div><span className="memberPill">Guest</span></section>
 <section className="heroCard premiumHero minimalHero" style={{backgroundImage:`linear-gradient(180deg,rgba(16,11,18,.03),rgba(16,11,18,.58)),url(${HERO_IMAGE})`}}>
   <div className="heroTopline"><span>{featured.destination}</span><span>Grand Tamarind Lake</span></div>
   <div className="heroCopy minimalHeroCopy"><span>DISCOVER LAVENDISH</span><h2>Stay somewhere beautiful.</h2><div className="heroButtons"><Link href="/hotels" className="pillButton heroPrimary">Explore hotels <Chevron/></Link></div></div>
 </section>
 <section className="quickActions premiumQuickActions">
   <a className="quickCall" href={`tel:${CENTRAL_PHONE}`}><b><PhoneIcon/></b><span><strong>Call</strong><small>Talk to reservations</small></span><i>→</i></a>
   <a className="quickWhatsapp" href={waLink()} target="_blank"><b><WhatsAppIcon/></b><span><strong>WhatsApp</strong><small>Fastest way to enquire</small></span><i>→</i></a>
   <a className="quickBook" href={BOOKING_URL}><b><CalendarIcon/></b><span><strong>Book now</strong><small>Check live availability</small></span><i>→</i></a>
   <Link className="quickOffer" href="/offers"><b><TagIcon/></b><span><strong>Offers</strong><small>See current escapes</small></span><i>→</i></Link>
 </section>
 <section className="sectionHead"><div><p className="eyebrow">THE COLLECTION</p><h2>Choose your Lavendish</h2></div><Link href="/hotels">View all</Link></section>
 <div className="hotelRail premiumHotelRail">{hotels.slice(0,4).map(h=><HotelCard key={h.slug} hotel={h}/>)}</div>
 <section className="memberCard premiumMemberCard"><div><p className="eyebrow">LAVENDISH MEMBERS</p><h2>Your stays, offers and favourites in one beautiful place.</h2><p>A simpler way to return to the hotels you love and keep every Lavendish journey close.</p></div><Link href="/profile">Enter members <Chevron/></Link></section>
 <section className="sectionHead"><div><p className="eyebrow">CURRENTLY AT LAVENDISH</p><h2>Offers worth escaping for</h2></div><Link href="/offers">All offers</Link></section>
 <div className="offerRail premiumOfferRail">{offers.slice(0,3).map(o=><Link href="/offers" key={o.id} className="miniOffer premiumMiniOffer" style={{backgroundImage:`linear-gradient(180deg,rgba(20,10,25,.05),rgba(20,10,25,.80)),url(${o.image})`}}><span>{o.badge}</span><div><h3>{o.title}</h3><p>{o.subtitle}</p><strong>View offer →</strong></div></Link>)}</div>
 </>}
