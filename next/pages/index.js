import Image from "next/image"
import Link from "next/link"
import Japan from "../public/jp.webp"
// <Image src='/jp.webp' width={400} height={400}/>

export default function Home() {
  return (
    <div>
      <Link href="/chanchitos">Ir a chanchitos</Link>
      <p>Chanchito feliz</p>
      <Image src={Japan} width={400} height={400} />
    </div>
  )
}
