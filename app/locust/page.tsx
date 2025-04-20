import DashboardLayout from '../components/layout/DashboardLayout';

export default function LocustPage() {
  return (
    <DashboardLayout>
      <div className="h-full">
        <h1 className="text-2xl font-bold mb-6">Locustテスト実行</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">準備中</h2>
            <p className="text-gray-500">
              この機能は現在開発中です。将来のアップデートをお待ちください。
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}