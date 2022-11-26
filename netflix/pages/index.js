import Head from 'next/head'
import Plan from '../components/Plan'
import MainSection from '../components/MainSection'
import EverywhereSection from '../components/EverywhereSection'
import TVSection from '../components/TVSection'
import ProfileSection from '../components/ProfileSection'
import OfflineSection from '../components/OfflineSection'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Netflix (CLONE)</title>
        <meta name="description" content="Created in NextJS with TailwindCSS" />
        <link rel="icon" href="/netflix.ico" />
      </Head>
      <Plan />
      <MainSection />
      <TVSection />
      <EverywhereSection />
      <ProfileSection />
      <OfflineSection />
      <FAQSection />
      <Footer />
    </div>
  )
}
