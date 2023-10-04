import 'focus-visible'
import '@/styles/tailwind.css'
import { CommonParent } from '@/components/CommonParent'

export default function App({ Component, pageProps }) {
  return (
    <CommonParent>
      <Component {...pageProps} />
    </CommonParent>
  )
}
