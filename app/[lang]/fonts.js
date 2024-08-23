import {Poppins, Parisienne, Style_Script,Montez,Allura} from 'next/font/google'
import localFont from 'next/font/local';


export const poppins = Poppins({
    weight:'400',
    subsets: ['latin'],
    display: 'swap',
})
export const parisienne = Parisienne({
    weight:'400',
    subsets: ['latin'],
    display: 'swap',
})
export const styleScript = Style_Script({
    weight:'400',
    subsets: ['latin'],
    display: 'swap',
})
export const montez = Montez({
    weight:'400',
    subsets: ['latin'],
    display: 'swap',
})
export const allura = Allura({
    weight:'400',
    subsets: ['latin'],
    display: 'swap',
})

const ostrich = localFont({
  src: './OstrichSans-Medium.otf', // Adjust the path accordingly

})
export default ostrich;