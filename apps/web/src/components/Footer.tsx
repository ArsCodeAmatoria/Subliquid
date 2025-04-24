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
              The next generation liquidity protocol for the Polkadot ecosystem. Built with ink! smart contracts and modern web technologies.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors"
              >
                <span className="text-zinc-400">𝕏</span>
              </a>
              <a 
                href="https://t.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors"
              >
                <span className="text-zinc-400">✈️</span>
              </a>
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors"
              >
                <span className="text-zinc-400">📱</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#features" className="text-zinc-400 hover:text-primary transition-colors">Features</a>
              </li>
              <li>
                <a href="/#roadmap" className="text-zinc-400 hover:text-primary transition-colors">Roadmap</a>
              </li>
              <li>
                <a href="/#ecosystem" className="text-zinc-400 hover:text-primary transition-colors">Ecosystem</a>
              </li>
              <li>
                <a href="/dashboard" className="text-zinc-400 hover:text-primary transition-colors">App</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/ArsCodeAmatoria/Subliquid" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://use.ink/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-primary transition-colors"
                >
                  ink! Documentation
                </a>
              </li>
              <li>
                <a 
                  href="https://polkadot.js.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-primary transition-colors"
                >
                  Polkadot.js
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Newsletter</h3>
            <p className="text-sm text-zinc-400 mb-4">Stay updated with the latest news and updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-zinc-800 border border-zinc-700 rounded-l-lg px-4 py-2 text-white w-full focus:outline-none focus:border-primary"
              />
              <button className="bg-primary hover:bg-primary/90 text-black font-bold rounded-r-lg px-4">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Subliquid. All rights reserved.
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-zinc-500 hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-500 hover:text-zinc-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 