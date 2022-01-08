import Container from './components/Container';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SortingComponent from './components/SortingComponent';
import TagsComponent from './components/TagsComponent';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Sidebar>
          <SortingComponent />
          <TagsComponent />
        </Sidebar>
      </Container>
    </div>
  );
}

export default App;
