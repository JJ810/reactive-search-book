import Home from './screen/home'
import Test from './screen/test'
const routes = [
    { path: '/', exact: true, name: 'Home Page', component: Home },
    { path: '/test', name: 'Test Page', component: Test },
    // { path: '/products-list-page', name: 'Products List Page', component: ProductsListPage },
];

export default routes;