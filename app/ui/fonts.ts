import { Inter, Lusitana, Roboto } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});
export const roboto = Roboto({
    weight: ['100', '400'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})



