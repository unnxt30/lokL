import Link from "next/link"
import Image from "next/image"
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import lokL from "@/public/images/footer-logo.svg"

interface FooterProps {
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
}

export default function Footer({ 
  backgroundColor = "bg-[#3c2a2a]", 
  borderColor = "border-gray-800",
  textColor = "text-white"
}: FooterProps = {}) {
  return (
    <footer className={`relative border-t ${backgroundColor} ${textColor}`}>
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <div className="flex flex-col items-center mb-6">
              <Image src={lokL} alt="lokL Logo" width={30} className="h-auto mb-2" />
              <p className="text-gray-400">HERE&apos;S THE PLAN</p>
            </div>
            </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <Link href="/" className="block text-gray-300 transition-colors hover:text-red-500">
                Home
              </Link>
              <Link href="/about" className="block text-gray-300 transition-colors hover:text-red-500">
                  Our Story
              </Link>
              <Link href="/share" className="block text-gray-300 transition-colors hover:text-red-500">
                Share 
              </Link>
              <Link href="/explore" className="block text-gray-300 transition-colors hover:text-red-500">
                Explore
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm text-gray-300 not-italic">
              <p>Shiv Nadar University</p>
              <p>Greater Noida, UP - 201314</p>
              <p>Phone: +91 0000000000</p>
              <p>Email: am222@snu.edu.in</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-gray-600 text-black  hover:text-red-500 hover:border-red-500 cursor-pointer">
                      <TwitterIcon className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-gray-600 text-black  hover:text-red-500 hover:border-red-500">
                      <InstagramIcon className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        <div className={`mt-12 flex flex-col items-center justify-between gap-4 border-t ${borderColor} pt-8 text-center md:flex-row`}>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} lokL. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <Link href="" className="text-gray-300 hover:text-red-500">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-300 hover:text-red-500">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-300 hover:text-red-500">
              Cookie Settings
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
