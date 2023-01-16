import { Route, Routes } from 'react-router-dom';
import Navbar from './functionBased/components/Navbar';
import TodoContainer from './functionBased/components/TodoContainer';
import About from './functionBased/pages/About';
import NotMatch from './functionBased/pages/NotMatch';
import SinglePage from './functionBased/pages/SinglePage';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<TodoContainer />} />
      <Route path="/react-todo-app" element={<TodoContainer />} />
      <Route path="/about">
        <Route index element={<About />} />
        <Route path=":slug" element={<SinglePage />} />
      </Route>
      <Route path="*" element={<NotMatch />} />
    </Routes>
  </>
);

export default App;
