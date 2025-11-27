import { GradientFillButton } from "./GradientFillButton";
import { AnimatedLink } from "./AnimatedLink";
import logo from "@/assets/emotionsites_logo.png";

export const Footer = () => {
  return (
    <footer className="px-8 py-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-20">
          {/* Left Column */}
          <div className="flex flex-col gap-6 max-w-sm">
            <a href="/" className="inline-block">
              <img 
                className="cursor-pointer object-contain align-middle inline-block h-11 w-auto" 
                src={logo} 
                alt="Motion Sites Logo" 
              />
            </a>
            <p className="text-muted-foreground">SaaS Website Template</p>
            
            {/* Social Links */}
            <div className="flex gap-6">
              <a href="https://www.instagram.com/" className="flex" aria-label="Instagram">
                <svg className="cursor-pointer w-8 h-7" fill="rgb(150, 156, 177)" viewBox="0 0 26 24" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M17.3194 2H8.43056C5.36231 2 2.875 4.48731 2.875 7.55556V16.4444C2.875 19.5127 5.36231 22 8.43056 22H17.3194C20.3876 22 22.875 19.5127 22.875 16.4444V7.55556C22.875 4.48731 20.3876 2 17.3194 2ZM20.9305 16.4444C20.9244 18.4362 19.3112 20.0494 17.3194 20.0556H8.43056C6.43873 20.0494 4.82555 18.4362 4.81945 16.4444V7.55556C4.82555 5.56372 6.43873 3.95054 8.43056 3.94444H17.3194C19.3112 3.95054 20.9244 5.56372 20.9305 7.55556V16.4444ZM18.1527 7.83333C18.7664 7.83333 19.2638 7.33587 19.2638 6.72222C19.2638 6.10858 18.7664 5.61111 18.1527 5.61111C17.5391 5.61111 17.0416 6.10858 17.0416 6.72222C17.0416 7.33587 17.5391 7.83333 18.1527 7.83333ZM12.875 7C10.1136 7 7.875 9.23858 7.875 12C7.875 14.7614 10.1136 17 12.875 17C15.6364 17 17.875 14.7614 17.875 12C17.878 10.673 17.3521 9.39952 16.4137 8.4612C15.4754 7.52288 14.202 6.99704 12.875 7ZM9.81945 12C9.81945 13.6876 11.1874 15.0556 12.875 15.0556C14.5625 15.0556 15.9305 13.6876 15.9305 12C15.9305 10.3124 14.5625 8.94444 12.875 8.94444C11.1874 8.94444 9.81945 10.3124 9.81945 12Z" fillRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.facebook.com/" className="flex" aria-label="Facebook">
                <svg className="cursor-pointer w-4 h-7" fill="rgb(150, 156, 177)" viewBox="0 0 15 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.7556 5.33333H8.42217C7.8085 5.33333 7.31106 5.8308 7.31106 6.44444V9.77778H11.7556C11.8819 9.77498 12.0018 9.83378 12.0769 9.93544C12.152 10.0371 12.1731 10.1689 12.1333 10.2889L11.3111 12.7333C11.2353 12.9577 11.0256 13.1093 10.7888 13.1111H7.31106V21.4444C7.31106 21.7512 7.06228 22 6.7555 22H3.97773C3.67091 22 3.42217 21.7512 3.42217 21.4444V13.1111H1.75551C1.44868 13.1111 1.19995 12.8623 1.19995 12.5556V10.3333C1.19995 10.0266 1.44868 9.77778 1.75551 9.77778H3.42217V6.44444C3.42217 3.98984 5.41206 2 7.86662 2H11.7556C12.0623 2 12.3111 2.24873 12.3111 2.55556V4.77778C12.3111 5.0846 12.0623 5.33333 11.7556 5.33333Z" />
                </svg>
              </a>
              <a href="https://x.com/" className="flex" aria-label="Twitter">
                <svg className="cursor-pointer w-8 h-7" fill="rgb(150, 156, 177)" viewBox="0 0 31 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.8412 4.89857C26.2342 5.7084 25.5003 6.41482 24.668 6.99055C24.668 7.20209 24.668 7.41363 24.668 7.63694C24.6747 11.4786 23.1402 15.1622 20.4085 17.8621C17.6767 20.562 13.9764 22.0522 10.1369 21.9986C7.91724 22.0061 5.72597 21.4993 3.73479 20.5178C3.62742 20.4709 3.55817 20.3647 3.55858 20.2475V20.1182C3.55858 19.9494 3.69533 19.8127 3.86401 19.8127C6.04591 19.7407 8.14996 18.9842 9.87849 17.6502C7.90357 17.6104 6.12665 16.4404 5.30889 14.6415C5.26759 14.5433 5.28044 14.4305 5.34283 14.3441C5.40521 14.2577 5.5081 14.2101 5.61431 14.2185C6.21453 14.2787 6.82076 14.2229 7.39987 14.0539C5.21972 13.6013 3.58157 11.7914 3.34713 9.5761C3.3388 9.46982 3.38642 9.36694 3.4728 9.30446C3.55917 9.24211 3.67181 9.22917 3.77003 9.2706C4.35508 9.52877 4.98665 9.66472 5.62606 9.67008C3.71573 8.4163 2.89059 6.03145 3.61731 3.86435C3.69233 3.65377 3.87256 3.4982 4.09176 3.45483C4.31095 3.41144 4.53681 3.48665 4.6863 3.6528C7.26417 6.39642 10.8062 8.03133 14.5655 8.21281C14.4693 7.82858 14.422 7.43369 14.4246 7.03755C14.4598 4.96043 15.745 3.11008 17.6786 2.35277C19.612 1.59548 21.8113 2.08109 23.2467 3.58228C24.225 3.39589 25.1709 3.06726 26.0542 2.60681C26.1189 2.56642 26.2009 2.56642 26.2657 2.60681C26.306 2.67155 26.306 2.75362 26.2657 2.81836C25.8378 3.79807 25.1151 4.61977 24.1982 5.16888C25.0011 5.07577 25.7898 4.88637 26.5476 4.60477C26.6114 4.56134 26.6952 4.56134 26.759 4.60477C26.8125 4.62921 26.8525 4.67597 26.8683 4.73258C26.8841 4.7892 26.8742 4.84992 26.8412 4.89857Z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/" className="flex" aria-label="LinkedIn">
                <svg className="cursor-pointer w-8 h-7" fill="rgb(150, 156, 177)" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M4.82232 2H20.3779C21.6052 2 22.6001 2.99492 22.6001 4.22222V19.7778C22.6001 21.0051 21.6052 22 20.3779 22H4.82232C3.59502 22 2.6001 21.0051 2.6001 19.7778V4.22222C2.6001 2.99492 3.59502 2 4.82232 2ZM8.15566 18.6667C8.46248 18.6667 8.71121 18.4179 8.71121 18.1111V10.3333C8.71121 10.0266 8.46248 9.77778 8.15566 9.77778H6.48899C6.18217 9.77778 5.93343 10.0266 5.93343 10.3333V18.1111C5.93343 18.4179 6.18217 18.6667 6.48899 18.6667H8.15566ZM7.32232 8.66667C6.40184 8.66667 5.65566 7.92048 5.65566 7C5.65566 6.07952 6.40184 5.33333 7.32232 5.33333C8.2428 5.33333 8.98899 6.07952 8.98899 7C8.98899 7.92048 8.2428 8.66667 7.32232 8.66667ZM18.7112 18.6667C19.018 18.6667 19.2668 18.4179 19.2668 18.1111V13C19.3029 11.2342 17.9974 9.72724 16.2445 9.51111C15.019 9.39917 13.8315 9.97156 13.1557 11V10.3333C13.1557 10.0266 12.9069 9.77778 12.6001 9.77778H10.9334C10.6267 9.77778 10.3779 10.0266 10.3779 10.3333V18.1111C10.3779 18.4179 10.6267 18.6667 10.9334 18.6667H12.6001C12.9069 18.6667 13.1557 18.4179 13.1557 18.1111V13.9444C13.1557 13.024 13.9019 12.2778 14.8223 12.2778C15.7428 12.2778 16.489 13.024 16.489 13.9444V18.1111C16.489 18.4179 16.7378 18.6667 17.0445 18.6667H18.7112Z" fillRule="evenodd" />
                </svg>
              </a>
            </div>
            
            <GradientFillButton href="https://www.flowfye.com/">
              Buy Template
            </GradientFillButton>
          </div>

          {/* Right Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 flex-1">
            {/* Pages */}
            <div>
              <h3 className="text-violet-100 text-lg font-semibold mb-4">Pages</h3>
              <div className="flex flex-col gap-3">
                <AnimatedLink href="/">Home</AnimatedLink>
                <AnimatedLink href="/feature">Feature</AnimatedLink>
                <AnimatedLink href="/pricing">Pricing</AnimatedLink>
                <AnimatedLink href="/about">About</AnimatedLink>
                <AnimatedLink href="/contact">Contact</AnimatedLink>
                <AnimatedLink href="/blog">Blogs</AnimatedLink>
              </div>
            </div>

            {/* Utility Pages */}
            <div>
              <h3 className="text-violet-100 text-lg font-semibold mb-4">Utility Pages</h3>
              <div className="flex flex-col gap-3">
                <AnimatedLink href="/utilities/style-guides">Style Guide</AnimatedLink>
                <AnimatedLink href="/utilities/licenses">Licenses</AnimatedLink>
                <AnimatedLink href="/utilities/changelog">Changelog</AnimatedLink>
                <AnimatedLink href="/404">404</AnimatedLink>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-violet-100 text-lg font-semibold mb-4">Contact</h3>
              <div className="flex flex-col gap-3">
                <AnimatedLink href="tel:+6218290117">(62) 1829017</AnimatedLink>
                <AnimatedLink href="mailto:Hello@flowfye.com">Hello@flowfye.com</AnimatedLink>
                <p className="text-muted-foreground">
                  2912 Meadowbrook Road,<br />
                  Los Angeles, CA 90017
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
