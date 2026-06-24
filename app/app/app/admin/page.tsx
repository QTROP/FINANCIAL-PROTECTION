export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        FPES Admin Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-4">
        <div className="border rounded-xl p-4">
          <h3>Total Users</h3>
          <p className="text-2xl font-bold">0</p>
        </div>

        <div className="border rounded-xl p-4">
          <h3>Transactions</h3>
          <p className="text-2xl font-bold">0</p>
        </div>

        <div className="border rounded-xl p-4">
          <h3>Disputes</h3>
          <p className="text-2xl font-bold">0</p>
        </div>

        <div className="border rounded-xl p-4">
          <h3>Revenue</h3>
          <p className="text-2xl font-bold">$0</p>
        </div>
      </div>
    </div>
  );
}
