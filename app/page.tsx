import Link from 'next/link';
import HotelCard from '@/components/HotelCard';
import {hotels,BOOKING_URL,waLink,CENTRAL_PHONE} from '@/lib/hotels';
import {offers} from '@/lib/offers';
import {PhoneIcon,WhatsAppIcon,CalendarIcon,TagIcon,Chevron} from '@/components/Icons';
export default function Home(){return <>
 <section className="welcome"><div><p>Good evening,</p><h1>Welcome to <span>Lavendish</span></h1></div><span className="memberPill">Guest</span></section>
 <section className="heroCard" style={{backgroundImage:`linear-gradient(180deg,rgba(22,15,26,.03),rgba(22,15,26,.76)),url(${hotels[0].image})`}}><div className="heroCopy"><span>EXCLUSIVE ESCAPES</span><h2>Make the next getaway beautifully simple.</h2><p>Discover handpicked stays across Sri Lanka.</p><Link href="/offers" className="pillButton">Explore offers <Chevron/></Link></div><div className="heroDots"><i/><i/><i/></div></section>
 <section className="quickActions"><a href={`tel:${CENTRAL_PHONE}`}><b><PhoneIcon/></b><span><strong>Call us</strong><small>One touch</small></span></a><a href={waLink()} target="_blank"><b className="green"><WhatsAppIcon/></b><span><strong>WhatsApp</strong><small>Chat with us</small></span></a><a href={BOOKING_URL}><b><CalendarIcon/></b><span><strong>Book now</strong><small>Best available rate</small></span></a><Link href="/offers"><b><TagIcon/></b><span><strong>All offers</strong><small>View current deals</small></span></Link></section>
 <section className="sectionHead"><div><p className="eyebrow">DISCOVER</p><h2>Find your perfect stay</h2></div><Link href="/hotels">View all</Link></section>
 <div className="hotelRail">{hotels.slice(0,4).map(h=><HotelCard key={h.slug} hotel={h}/>)}</div>
 <section className="memberCard"><div><p className="eyebrow">LAVENDISH MEMBERS</p><h2>More comfort, before you even arrive.</h2><p>Save favourites, keep your stays together and unlock member-only benefits as the app grows.</p></div><Link href="/profile">Join / Sign in <Chevron/></Link></section>
 <section className="sectionHead"><div><p className="eyebrow">CURATED FOR YOU</p><h2>Latest escapes</h2></div><Link href="/offers">All offers</Link></section>
 <div className="offerRail">{offers.slice(0,3).map(o=><Link href="/offers" key={o.id} className="miniOffer" style={{backgroundImage:`linear-gradient(180deg,rgba(20,10,25,.08),rgba(20,10,25,.76)),url(${o.image})`}}><span>{o.badge}</span><div><h3>{o.title}</h3><p>{o.subtitle}</p></div></Link>)}</div>
 </>}
