import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Orders from '../OrdersPage/OrdersPage';
import DriversList from '../DriversList/DriversList';
import api from '../../modules/api';
import HintMessage from '../HintMessage/HintMessage.js';



export default class DispatcherTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      drivers: []
    };
  }
  componentDidMount(){
    api.getDriversList().then((response) => {
      console.log(response.drivers);
      this.setState({
        drivers: response.drivers
      }
      );
    })
      .catch((error) => {
        console.log(error)
      })
  }
  handleSelect(index, last) {
  console.log('Selected tab: ' + index + ', Last tab: ' + last);
  }
  render() {
    return (
      <div>
      <Tabs onSelect={this.handleSelect} selectedIndex={0} >
        <TabList>
          <Tab>Orders List</Tab>
          <Tab>Drivers List</Tab>
        </TabList>
        <TabPanel>
          <Orders />
        </TabPanel>
        <TabPanel>
          <DriversList driver={this.state.drivers}/>
        </TabPanel>
      </Tabs>
      </div>
    );
  }
}