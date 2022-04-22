import React, { useState } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'

import TabOptions from '../../components/tabOptions'

import "./style.scss"

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery")

  const currentActiveTab = (tab) => {
    switch (tab) {
      case "Delivery":
        return <Delivery />
    }
  }
  return (
    <div>
      <Header />
      <TabOptions />
      {currentActiveTab()}
      <Footer />
    </div>
  )
}

export default HomePage