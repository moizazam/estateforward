import './globals.css';
import type { Metadata } from 'next';
export const metadata:Metadata={title:'ESTATEforward | Property & Real Estate',description:'Discover properties, connect with trusted agents and explore real estate opportunities in Pakistan.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
