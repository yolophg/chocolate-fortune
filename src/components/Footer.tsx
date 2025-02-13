import Link from "next/link";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full bg-[#E6D5C4] bg-opacity-50 py-4'>
      <div className='container mx-auto px-4 flex justify-between items-center max-w-3xl'>
        <div className='text-[#654321] text-sm'>
          © {currentYear} Helena Park
        </div>

        <div className='flex gap-4'>
          <Link
            href='https://github.com/yolophg/chocolate-fortune'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#654321] hover:text-[#A67B5B] transition-colors'
          >
            <FaGithub size={20} />
          </Link>

          <Link
            href='mailto:phg5590@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#654321] hover:text-[#A67B5B] transition-colors'
          >
            <FaEnvelope size={20} />
          </Link>

          <Link
            href='https://www.linkedin.com/in/yolophg'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#654321] hover:text-[#A67B5B] transition-colors'
          >
            <FaLinkedin size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
