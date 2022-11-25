import Head from 'next/head'
import EverywhereSection from '../components/EverywhereSection'
import MainSection from '../components/MainSection'
import Plan from '../components/Plan'
import ProfilesSection from '../components/ProfilesSection'
import TVSection from '../components/TVSection'
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
      <ProfilesSection />
      <OfflineSection />
      <FAQSection />
      <Footer />

    </div>
  )
}
