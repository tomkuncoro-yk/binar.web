import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import SimplePage from './pages/SimplePage'
import PublicationsPage from './pages/PublicationsPage'
import EventsPage from './pages/EventsPage'
import TeamPage from './pages/TeamPage'
import ContactPage from './pages/ContactPage'
import PressKitPage from './pages/PressKitPage'
import ResourcesPage from './pages/ResourcesPage'
import JournalPage from './pages/JournalPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <SimplePage title="About" /> },
      { path: 'about/vision-mission', element: (
        <SimplePage title="Vision & Mission">
          <p>We advance rigorous, nonpartisan research across Indonesia and Southeast Asia, bridging scholarship, policy, and public debate.</p>
        </SimplePage>
      ) },
      { path: 'about/director', element: <SimplePage title="Director’s Message" /> },
      { path: 'about/team', element: <TeamPage /> },
      { path: 'about/advisory-board', element: <SimplePage title="Advisory Board" /> },
      { path: 'about/reports', element: <SimplePage title="Annual Reports" /> },

      { path: 'research', element: <SimplePage title="Research" /> },
      { path: 'research/themes', element: <SimplePage title="Themes" /> },
      { path: 'research/projects', element: <SimplePage title="Projects" /> },
      { path: 'research/labs', element: <SimplePage title="Labs & Initiatives" /> },
      { path: 'research/methods', element: <SimplePage title="Methods (Data & Tools)" /> },

      { path: 'publications', element: <PublicationsPage /> },
      { path: 'journal', element: <JournalPage /> },
      { path: 'news', element: <SimplePage title="News & Insights" /> },
      { path: 'press-kit', element: <PressKitPage /> },
      { path: 'events', element: <EventsPage /> },
      { path: 'education', element: <SimplePage title="Education & Training" /> },
      { path: 'partnerships', element: <SimplePage title="Partnerships" /> },
      { path: 'resources', element: <ResourcesPage /> },
      { path: 'get-involved', element: <SimplePage title="Get Involved" /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'subscribe', element: <SimplePage title="Subscribe" /> },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
