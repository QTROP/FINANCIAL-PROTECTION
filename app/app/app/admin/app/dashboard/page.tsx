export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">
        User Dashboard
      </h1>

      <div className="mt-6 border rounded-xl p-6">
        <h2 className="font-semibold">
          Active Escrows
        </h2>

        <p>No active transactions.</p>
      </div>
    </div>
  );
}
