import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/trip-trekker-logo.svg" width={150} height={100} alt="logo" />
        <ul className="hidden h-full"></ul>
      </Link>
    </nav>
  )
}

export default Navbar