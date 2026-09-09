import './globals.css';
import './polish.css';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Scribblit — Ideas. Notes. Clarity.', description: 'A smart notebook for the way your mind moves.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
