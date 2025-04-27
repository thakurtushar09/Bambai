import Image from "next/image";
import Link from "next/link";
import { IM_Fell_DW_Pica_SC } from 'next/font/google';

const imFell = IM_Fell_DW_Pica_SC({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-im-fell',
  display: 'swap',
});

export default function Home() {
  return (
    <div className={`h-screen bg-[url(/home-image.png)] ${imFell.variable} font-[IM_Fell_DW_Pica_SC]`}>
      <div className="w-[90%] flex items-center gap-80">
      <Link href={'/'} className="">
        <Image src={"/home-logo.png"} alt="logo" height={200} width={200} />
      </Link>

      <div className="flex items-center gap-7">

      <Link href={'/'} className="px-6 py-3 rounded-full bg-[#5e4e37] font-[IM_Fell_DW_Pica_SC] font-bold">Home</Link> 

      <Link href={'/Quest'} className="px-6 py-3 rounded-full bg-[#5e4e37] font-bold">Quest</Link>

      <Link href={'/Leaderboard'} className="px-6 py-3 rounded-full bg-[#5e4e37] font-bold">Leaderboard</Link>

      <Link href={'/Store'} className="px-6 py-3 rounded-full bg-[#5e4e37] font-bold">Store</Link>

      </div>
    </div>
    </div>

  );
}
