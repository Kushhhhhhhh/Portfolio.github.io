import Link from 'next/link'
import Homepage from "./homepage/page";

export default function Home() {
  return (
    <>
       <Link href='/'><Homepage /></Link>
    </>
  )
}
