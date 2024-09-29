import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)

// 초기에 getMockData 중복호출로 strict 모드 제거
