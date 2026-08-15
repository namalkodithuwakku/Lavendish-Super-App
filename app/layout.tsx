import type {Metadata,Viewport} from 'next';
import './globals.css';
import BottomNav from '@/components/BottomNav';
import AppHeader from '@/components/AppHeader';
import RegisterSW from '@/components/RegisterSW';
export const metadata:Metadata={title:{default:'Lavendish Members',template:'%s · Lavendish'},description:'The Lavendish guest and member super app.',manifest:'/manifest.webmanifest',appleWebApp:{capable:true,statusBarStyle:'default',title:'Lavendish'}};
export const viewport:Viewport={themeColor:'#A989BF',width:'device-width',initialScale:1,viewportFit:'cover'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><RegisterSW/><div className="desktopShell"><aside className="desktopSide"><img src="/brand/lavendish-logo.jpeg" alt="Lavendish Leisure Hotels & Resorts"/><div className="sideCopy"><p className="kicker">MEMBERS</p><h1>Your stay.<br/>Your holidays.<br/><em>Your Lavendish.</em></h1><p>A simpler way to discover, book and enjoy every Lavendish stay.</p></div><div className="sideBadge">10 hotels · Sri Lanka</div></aside><div className="appFrame"><AppHeader/><main className="content">{children}</main><BottomNav/></div></div></body></html>}
