import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      {isLoading && <Loader />}
      <Header />
      <main>
        <h1>Content</h1>
        {/* AppLayout component must content and <Outlet /> component for rendering children routes */}
        <Outlet />
      </main>
      <CartOverview />
    </>
  );
}

export default AppLayout;
