export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold">
        Financial Protection Escrow Services
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        Secure Transactions. Protected Funds.
      </p>

      <div className="mt-8">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          Create Escrow
        </button>
      </div>
    </main>
  );
}
