import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import Hero from './Hero'
function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </div>
  );
}

export default App;
