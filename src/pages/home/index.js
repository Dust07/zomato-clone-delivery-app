import React, { useState } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import TabOptions from '../../components/tabOptions'
import Delivery from "../../components/delivery"
import DiningOut from "../../components/diningOut"
import Nightlife from "../../components/nightlife"

import "./style.scss"

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery")

  const currentActiveTab = (tab) => {
    switch (tab) {
      case "Delivery":
        return <Delivery />
      case "Dining Out":
        return <DiningOut />
      case "Nightlife":
        return <Nightlife />
      default:
        return <Delivery />
    }
  }
  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {currentActiveTab(activeTab)}
      <Footer />
    </div>
  )
}

export default HomePage