export function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-auto py-8 bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="text-xl font-bold text-primary">Subliquid</h2>
            <p className="text-sm text-zinc-400">Modern PSP22 token implementation</p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://github.com/ArsCodeAmatoria/Subliquid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://use.ink/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              ink!
            </a>
            <a 
              href="https://polkadot.js.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Polkadot.js
            </a>
          </div>
          
          <div className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Subliquid
          </div>
        </div>
      </div>
    </footer>
  );
} 