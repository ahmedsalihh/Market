import Container from './components/Container';
import Content from './components/Content';
import Header from './components/Header';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import SortingComponent from './components/SortingComponent';
import TagsComponent from './components/TagsComponent';
import ProductsContainer from './containers/ProductContainer';
import ShopingChartContainer from './containers/ShoppingChartContainer';

function App() {
  const sortingItems = [
    { id: 's1', label: 'Price low to high' },
    { id: 's2', label: 'Price high to low' },
    { id: 's3', label: 'New to old' },
    { id: 's4', label: 'old to new' },
  ];

  const brandsItems = [
    { id: 'b1', label: 'All' },
    { id: 'b2', label: 'Brand 1' },
    { id: 'b3', label: 'Brand 2' },
    { id: 'b4', label: 'Brand 3' },
    { id: 'b5', label: 'Brand 4' },
    { id: 'b6', label: 'Brand 5' },
    { id: 'b7', label: 'Brand 6' },
  ];

  const tagsItems = [
    { id: 't1', label: 'Tag 1' },
    { id: 't2', label: 'Tag 2' },
    { id: 't3', label: 'Tag 3' },
    { id: 't4', label: 'Tag 4' },
    { id: 't5', label: 'Tag 5' },
    { id: 't6', label: 'Tag 6' },
    { id: 't7', label: 'Tag 7' },
  ];

  const chratItems = [
    { id: 1, name: 'Item1', amount: '14.99', count: 1 },
    { id: 2, name: 'Item2', amount: '13.99', count: 1 },
  ];

  return (
    <div>
      <Header />
      <Container>
        <Layout>
          <Sidebar>
            <SortingComponent items={sortingItems} />
            <TagsComponent title='Brands' items={brandsItems} />
            <TagsComponent title='Tags' items={tagsItems} />
          </Sidebar>
          <Content>
            <ProductsContainer />
          </Content>
          <Sidebar>
            <ShopingChartContainer chartItems={chratItems} />
          </Sidebar>
        </Layout>
      </Container>
    </div>
  );
}

export default App;
