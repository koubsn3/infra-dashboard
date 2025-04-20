import DashboardLayout from './components/layout/DashboardLayout';
import ChatBox from './components/chat/ChatBox';

export default function Home() {
  return (
    <DashboardLayout>
      <div className="h-full">
        <h1 className="text-2xl font-bold text-gray-700 mb-6">インフラダッシュボード</h1>
        <div className="h-[calc(100%-4rem)]">
          <ChatBox />
        </div>
      </div>
    </DashboardLayout>
  );
}
