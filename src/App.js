import Container from './components/Container';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import SortingComponent from './containers/SortingComponent';
import BrandsContainer from './containers/BrandsContainer';
import ProductsContainer from './containers/ProductContainer';
import ShopingChartContainer from './containers/ShoppingChartContainer';
import TagsContainer from './containers/TagsContainer';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Layout>
          <Sidebar>
            <SortingComponent />
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
