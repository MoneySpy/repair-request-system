import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">ระบบแจ้งซ่อมคลังสินค้า (FM)</h1>
      <nav className="flex flex-col gap-4 w-full max-w-xs">
        <Link href="/repair" className="btn">แจ้งซ่อม</Link>
        <Link href="/admin" className="btn">Admin Dashboard</Link>
        <Link href="/technician" className="btn">Technician Dashboard</Link>
        <Link href="/ai-knowledge" className="btn">AI Knowledge</Link>
        <Link href="/vendor" className="btn">Vendor Management</Link>
        <Link href="/ma" className="btn">MA Management</Link>
        <Link href="/kpi" className="btn">KPI Dashboard</Link>
        <Link href="/summary" className="btn">สรุปงาน</Link>
      </nav>
      <style jsx>{`
        .btn {
          display: block;
          padding: 1rem;
          background: #2563eb;
          color: white;
          border-radius: 0.5rem;
          text-align: center;
          font-weight: 500;
          transition: background 0.2s;
        }
        .btn:hover {
          background: #1d4ed8;
        }
      `}</style>
      </main>
  );
}
