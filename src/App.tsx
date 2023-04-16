import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import NotFound from './pages/NotFound';

import './scss/app.scss';
import MainLayout from './layouts/MainLayout';
import { Product } from './pages/Product/Product';
import { Chapter } from './pages/Chapter/Chapter';
// import { Contacts } from './pages/Contacts/Contacts';
// import { Delivery } from './pages/Delivery/Delivery';
// import { PayPage } from './pages/PayPage/PayPage';
// import Warranty from './pages/ Warranty/Warranty';
// import Сollaboration from './pages/Сollaboration/Сollaboration';
// import Returns from './pages/Returns/Returns';

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart/Cartcopy'));
const Delivery = React.lazy(
  () => import(/* webpackChunkName: "Delivery" */ './pages/Delivery/Delivery'),
);
const Contacts = React.lazy(
  () => import(/* webpackChunkName: "Contacts" */ './pages/Contacts/Contacts'),
);
const PayPage = React.lazy(
  () => import(/* webpackChunkName: "PayPage" */ './pages/PayPage/PayPage'),
);
const Warranty = React.lazy(
  () => import(/* webpackChunkName: "Warranty" */ './pages/ Warranty/Warranty'),
);
const Сollaboration = React.lazy(
  () => import(/* webpackChunkName: "Collaboration" */ './pages/Сollaboration/Сollaboration'),
);
const Returns = React.lazy(
  () => import(/* webpackChunkName: "Returns" */ './pages/Returns/Returns'),
);
const Outlet = React.lazy(() => import(/* webpackChunkName: "Outlet" */ './pages/Outlet/Outlet'));
const BrandPage = React.lazy(
  () => import(/* webpackChunkName: "BrandPage" */ './pages/BrandPage/BrandPage'),
);
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/ReactPizza/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/chapter" element={<Chapter />} />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<div>Идет загрузка корзины...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="/contacts"
          element={
            <Suspense fallback={<div>Идет загрузка контактов...</div>}>
              <Contacts />
            </Suspense>
          }
        />
        <Route
          path="/delivery"
          element={
            <Suspense fallback={<div>Идет загрузка доставки...</div>}>
              <Delivery />
            </Suspense>
          }
        />
        <Route
          path="/warranty"
          element={
            <Suspense fallback={<div>Идет загрузка гарантии...</div>}>
              <Warranty />
            </Suspense>
          }
        />
        <Route
          path="/collaboration"
          element={
            <Suspense fallback={<div>Идет загрузка сотрудничества...</div>}>
              <Сollaboration />
            </Suspense>
          }
        />
        <Route
          path="/paypage"
          element={
            <Suspense fallback={<div>Идет загрузка страницы оплаты...</div>}>
              <PayPage />
            </Suspense>
          }
        />
        <Route
          path="/returns"
          element={
            <Suspense fallback={<div>Идет загрузка возврата...</div>}>
              <Returns />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Идет загрузка старницы...</div>}>
              <NotFound />
            </Suspense>
          }
        />
        <Route
          path="/outlet"
          element={
            <Suspense fallback={<div>Идет загрузка Распродажи...</div>}>
              <Outlet />
            </Suspense>
          }
        />
        <Route
          path="/brandpage"
          element={
            <Suspense fallback={<div>Идет загрузка страницы Бренда...</div>}>
              <BrandPage />
            </Suspense>
          }
        />
        {/* <Route path="/contacts" element={<Contacts />} /> */}
        {/* <Route path="/delivery" element={<Delivery />} /> */}
        {/* <Route path="/warranty" element={<Warranty />} /> */}
        {/* <Route path="/collaboration" element={<Сollaboration />} /> */}
        {/* <Route path="/paypage" element={<PayPage />} /> */}
        {/* <Route path="/returns" element={<Returns />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
