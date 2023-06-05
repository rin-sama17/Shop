import MainLayout from '@/layouts/MainLayout';
import './globals.css';



export const metadata = {
  title: 'فروشگاه من',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <MainLayout>
          { children }
        </MainLayout>
      </body>
    </html>
  );
}
