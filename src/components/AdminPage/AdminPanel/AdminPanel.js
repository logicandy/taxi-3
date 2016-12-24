import React from 'react';
import {Link} from 'react-router';
import {TABS} from '../../../constants/tabs';
import './AdminPanel.css'


export default class AdminPanel extends React.Component {


  render() {
    const entity = this.props.entity;
    const activeTab = TABS.find(t => t.url === entity);

    return (
      <div>
        <ul className="tab tab-block">
          {
            TABS.map(tab => (
              <li key={tab.name}
                  className={`tab-item ${activeTab === tab ? 'active' : ''}`}
              >
                <Link
                  to={`/admin/${tab.url}`}>
                  {tab.name}
                </Link>
              </li>
            ))
          }
        </ul>
        <div className="admin-panel--result-block">
          {React.cloneElement(this.props.children, {entityToLoad: entity}) }
        </div>
      </div>
    );
  }
}
