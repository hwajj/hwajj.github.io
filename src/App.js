import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={'*'} element={<Navigate replace to={'/'} />} />
        </Route>

        <Route path={'*'} element={<Navigate replace to={'/'} />} />
      </Routes>
    </>
  )
}

export default App
