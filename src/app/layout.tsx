import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next Shadcn',
  description: 'Basic dashboard with Next.js and Shadcn'
};

export default async function RootLayout({ children }: any) {
  return (
    <html lang='en'>
      <body>
        {children}
        <div>footer</div>
      </body>
    </html>
  );
}
