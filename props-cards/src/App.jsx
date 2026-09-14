import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import GymEquipmentGrid from "./GymEquipmentgrid";

function App() {
  return (
    <>
      <GymEquipmentGrid />
      <ToastContainer
        position="top-right"
        autoClose={1800}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
}

export default App;