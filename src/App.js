import './App.css';
import ShopPage from './pages/ShopPage';
import ShopingCartPage from './pages/ShopingCartPage';
import HistoryPage from './pages/HistoryPage';
import CouponsPage from './pages/CouponsPage';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from './component/Navigation/Navigation';
import Loader from './component/Loader/Loader';
import Layout from './component/Loyaut/Layout';
import { useSelector } from 'react-redux';
import { selectIsLoading } from './redax/catalogSelector';
import { loadingSelector } from './redax/order/orderSelector';


function App() {
  const isLoading = useSelector(selectIsLoading);
  const isLoadingOrders = useSelector(loadingSelector);


 
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ShopPage />} />
            <Route path="/shopingcart" element={<ShopingCartPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/coupons" element={<CouponsPage/>}/>
            <Route path="*" element={<Navigation to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
      {isLoading && <Loader />}
      {isLoadingOrders && <Loader/>}
    </>
  );
}

export default App;
