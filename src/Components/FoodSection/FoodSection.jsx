import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Breakfast from '../Food/Breakfast';
import "./FoodSection.css";

const FoodSection = () => {

  return (
    <div className='food'>

      <Tabs
        defaultActiveKey="breakfast1"
        className="tabSec"
        variant="pills"
      >
        <Tab   eventKey="breakfast1" title="Breakfast">
         <Breakfast type="tabBreakfast" />
        </Tab>
        <Tab  eventKey="lunch2" title="Lunch">
        <Breakfast type="tabLunch" />
        </Tab>
        <Tab eventKey="dinner3" title="Dinner">
        <Breakfast type="tabDinner" />
        </Tab>
      </Tabs>
    </div>
  );
};

export default FoodSection;