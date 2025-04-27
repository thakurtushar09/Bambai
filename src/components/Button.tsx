import Link from 'next/link';

type ButtonProps = {
  text: string;
  href: string;
};

const NavButton = ({ text, href }: ButtonProps) => {
  return (
    <div className="hover:scale-110 transition-transform duration-200 ease-out">
      <Link
        href={href}
        className="px-6 py-3 bg-white text-black font-bold rounded-xl shadow-[6px_6px_0px_black] border-2 border-[#2F195F]"
      >
        {text}
      </Link>
    </div>
  );
};

export default NavButton;
