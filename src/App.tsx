import './styles/theme.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MusicProvider } from './components/MusicContext';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { RightPanel } from './components/RightPanel';
import PlayerBar from './components/PlayerBar';
import ProjectDetail from './components/ProjectDetail';

// 单一代码库、双平台自适应 basename。
// base 前缀由 vite.config.ts 依据环境变量（VERCEL）区分（已验证产物资源路径正确）：
//   - GitHub Pages 部署在 https://<user>.github.io/myprofile/ 子路径
//   - Vercel 部署在根路径 /
// basename 在运行时由当前 URL 推导，避免依赖构建期注入：
const basename = (() => {
  const p = window.location.pathname;
  return p === '/myprofile' || p.startsWith('/myprofile/') ? '/myprofile' : undefined;
})();

function App() {
  return (
    <MusicProvider>
      <BrowserRouter basename={basename}>
        <div className="app">
          <Sidebar />
          <div className="main-content-wrapper">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
          </div>
          <RightPanel />
        </div>
        <PlayerBar />
      </BrowserRouter>
    </MusicProvider>
  );
}

export default App;