import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Suspense } from 'react'
import { Blogs } from './pages/Blogs';
import Ask from './pages/Ask'
import ImageUpload  from './components/Images'
function App() {

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={"loading..."}>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/ask" element={<Ask />} />
            <Route path="/image" element={<ImageUpload />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App