import { createBrowserRouter } from 'react-router'
import { Layout } from './components/Layout'
import { About } from './pages/About'
import { Experience } from './pages/Experience'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Talks } from './pages/Talks'
import { WorkDetail } from './pages/WorkDetail'
import { Works } from './pages/Works'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/works', element: <Works /> },
      { path: '/works/:slug', element: <WorkDetail /> },
      { path: '/talks', element: <Talks /> },
      { path: '/experience', element: <Experience /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
