import Link from "next/link"
import Image from "next/image"
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import lokL from "@/public/images/footer-logo.svg"

export default function Footer() {
  return (
    <footer className="bg-[#3c2a2a] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex flex-col items-center">
              <Image src={lokL} alt="lokL Logo" width={30} className="h-auto mb-2" />
              <p className="text-gray-400">HERE&apos;S THE PLAN</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
              Contribute
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
              Privacy
            </Link>
            
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} lokL</p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
              <InstagramIcon className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
              <GitHubIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
