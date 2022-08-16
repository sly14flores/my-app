// Setup Routing

import loadable from '@loadable/component'

import {
  Routes,
  Route,
  // Navigate,
  // useLocation,
} from 'react-router-dom';

const Groups = loadable(() => import('./pages/Groups'))
const NewGroup = loadable(() => import('./pages/Groups/New'))
const EditGroup = loadable(() => import('./pages/Groups/Edit'))

const App = () => {

  return (
    <>
      <Routes>
        {/* <Route path="/groups" element={<ProtectedRoute><Groups /></ProtectedRoute>}> */}
        <Route path="/groups" element={<Groups />}>
          <Route path="group/add" element={<NewGroup />} />
          <Route path=":id" element={<EditGroup />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
