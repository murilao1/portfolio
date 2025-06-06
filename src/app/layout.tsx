import React from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});
const funnelDisplay = localFont({
  src: './fonts/FunnelDisplay-VariableFont_wght.ttf',
  variable: '--font-funnel-display',
});
const montserrat = localFont({
  src: './fonts/Montserrat-VariableFont_wght.ttf',
  variable: '--font-montserrat',
});
const redHatMono = localFont({
  src: './fonts/RedHatMono-VariableFont_wght.ttf',
  variable: '--font-redhat-mono',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${funnelDisplay.variable} ${montserrat.variable} ${redHatMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
