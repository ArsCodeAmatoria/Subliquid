import { ThumbsDown, Trash2, Laugh } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-auto py-12 bg-zinc-900/70 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-highlight flex items-center justify-center">
                <span className="text-black font-bold text-xs">SLQ</span>
              </div>
              <h2 className="text-xl font-bold text-white">Subliquid</h2>
            </div>
            <p className="text-sm text-zinc-400 mb-4">
              The token that makes your wallet lighter and your regrets heavier. We're rich, you're not. Deal with it.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors"
              >
                <ThumbsDown size={18} className="text-zinc-400" />
              </a>
              <a 
                href="https://t.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors"
              >
                <Trash2 size={18} className="text-zinc-400" />
              </a>
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors"
              >
                <Laugh size={18} className="text-zinc-400" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Useless Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#features" className="text-zinc-400 hover:text-primary transition-colors">Shit We Made Up</a>
              </li>
              <li>
                <a href="/#testimonials" className="text-zinc-400 hover:text-primary transition-colors">Our Message</a>
              </li>
              <li>
                <a href="/#roadmap" className="text-zinc-400 hover:text-primary transition-colors">Empty Promises</a>
              </li>
              <li>
                <a href="/dashboard" className="text-zinc-400 hover:text-primary transition-colors">Scam Portal</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Shit You Won't Read</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/ArsCodeAmatoria/Subliquid" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-primary transition-colors"
                >
                  Our Garbage Code
                </a>
              </li>
              <li>
                <a 
                  href="https://use.ink/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-primary transition-colors"
                >
                  Nerd Stuff
                </a>
              </li>
              <li>
                <a 
                  href="https://polkadot.js.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-primary transition-colors"
                >
                  More Boring Crap
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Spam Signup</h3>
            <p className="text-sm text-zinc-400 mb-4">Enter your email. We'll sell it to scammers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your precious email" 
                className="bg-zinc-800 border border-zinc-700 rounded-l-lg px-4 py-2 text-white w-full focus:outline-none focus:border-primary"
              />
              <button className="bg-primary hover:bg-primary/90 text-black font-bold rounded-r-lg px-4">
                Sucker
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Subliquid. No rights given. We own your soul now.
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-zinc-500 hover:text-zinc-400 transition-colors">Data Theft Policy</a>
            <a href="#" className="text-zinc-500 hover:text-zinc-400 transition-colors">Terms of Servitude</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 