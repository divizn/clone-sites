import Head from 'next/head'
import MainSection from '../components/MainSection'
import Plan from '../components/Plan'
import TVSection from '../components/TVSection'

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
      {/**<EverywhereSection /> */}
      {/**<ProfilesSection /> */}
      {/**<OfflineSection /> */}
      {/**<FAQSection /> */}
      {/**<Footer /> */}

    </div>
  )
}
