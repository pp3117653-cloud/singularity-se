export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-4 font-sans flex flex-col items-center">
      <header className="w-full max-w-md flex justify-between items-center py-4 border-b">
        <h1 className="text-xl font-bold tracking-tight">Singularity Earn</h1>
        <div className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">0 Coins</div>
      </header>
      
      <main className="w-full max-w-md mt-8 flex flex-col gap-4">
        <div className="w-full bg-blue-50 text-blue-800 text-xs font-bold px-4 py-2 rounded-md mb-2 text-center uppercase tracking-wide">
          Your Ad Banner Here - 100% User Focus
        </div>
        
        <p className="text-sm text-gray-500 mb-2">Select an educational book to start earning.</p>

        <div className="border rounded-lg p-4 flex justify-between items-center shadow-sm">
          <div>
            <h2 className="font-semibold text-lg">UPSC History & Polity</h2>
            <p className="text-xs text-gray-500 mt-1">Reward: 10 Coins / Page</p>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium">Read</button>
        </div>

        <div className="border rounded-lg p-4 flex justify-between items-center shadow-sm">
          <div>
            <h2 className="font-semibold text-lg">NCERT Physics Class 12</h2>
            <p className="text-xs text-gray-500 mt-1">Reward: 10 Coins / Page</p>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium">Read</button>
        </div>

        <div className="border rounded-lg p-4 flex justify-between items-center shadow-sm">
          <div>
            <h2 className="font-semibold text-lg">Business Mastery Vol 1.</h2>
            <p className="text-xs text-gray-500 mt-1">Reward: 10 Coins / Page</p>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium">Read</button>
        </div>
      </main>
    </div>
  );
}
