import Container from './components/Container';
import Content from './components/Content';
import Footer from './components/Footer';
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
            <Footer />
          </Content>
          <Sidebar>
            <ShopingChartContainer />
          </Sidebar>
        </Layout>
      </Container>
    </div>
  );
}

export default App;
