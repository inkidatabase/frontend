import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GroupList from './pages/GroupList'
import GroupDetail from './pages/GroupDetail'
import NavigationBar from './components/Navbar'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <NavigationBar />
        <main className="container mx-auto py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/groups" element={<GroupList />} />
            <Route path="/groups/:groupName" element={<GroupDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
