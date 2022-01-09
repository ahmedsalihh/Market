import Container from './components/Container';
import Content from './components/Content';
import Header from './components/Header';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import SortingComponent from './components/SortingComponent';
import BrandsContainer from './containers/BrandsContainer';
import ProductsContainer from './containers/ProductContainer';
import ShopingChartContainer from './containers/ShoppingChartContainer';
import TagsContainer from './containers/TagsContainer';

function App() {
  const sortingItems = [
    { id: 's1', label: 'Price low to high' },
    { id: 's2', label: 'Price high to low' },
    { id: 's3', label: 'New to old' },
    { id: 's4', label: 'old to new' },
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
            <BrandsContainer title='Brands' />
            <TagsContainer title='Tags' />
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
