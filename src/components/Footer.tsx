import Link from "next/link";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full bg-[#D7CCC8] bg-opacity-50 py-4 absolute bottom-0'>
      <div className='max-w-7xl mx-auto px-4 flex justify-between items-center'>
        <div className='text-[#4E342E] text-sm'>
          © {currentYear} Helena Park
        </div>

        <div className='flex gap-4'>
          <Link
            href='https://github.com/yolophg/chocolate-fortune'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#4E342E] hover:text-[#8D6E63] transition-colors'
          >
            <FaGithub size={20} />
          </Link>

          <Link
            href='mailto:phg5590@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#4E342E] hover:text-[#8D6E63] transition-colors'
          >
            <FaEnvelope size={20} />
          </Link>

          <Link
            href='https://www.linkedin.com/in/yolophg'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#4E342E] hover:text-[#8D6E63] transition-colors'
          >
            <FaLinkedin size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
