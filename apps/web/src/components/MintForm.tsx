'use client';

export function MintForm() {
  return (
    <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50">
      <h2 className="text-2xl font-semibold mb-4">Mint Tokens</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium mb-2">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-primary text-white"
            placeholder="Enter amount to mint"
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg
            transition-colors duration-200 font-semibold"
        >
          Mint Tokens
        </button>
      </form>
    </div>
  );
}
