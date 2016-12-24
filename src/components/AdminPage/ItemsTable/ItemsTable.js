import React from 'react';
import './ItemsTable.css';

export default class TableList extends React.Component {

  render() {

    const headlines = Object.keys(this.props.loadEntities[0]);
    const rowItems = this.props.loadEntities;

    return (
      <div className="items-table">
        <div className="divider"/>
        <table className="table table-striped table-hover">
          <thead className="table--head">
          <tr>
            {headlines.map((headline)=><th key={headline}>{headline}</th>)}
          </tr>
          </thead>
          <tbody>
          {
            rowItems.map((item)=> {
              return (
                <tr key={`tr-${item.id}`} className="table-row__active">
                  {
                    headlines.map((headline)=><td key={headline}>{item[headline]}</td>)
                  }
                </tr>)})
          }
          </tbody>
        </table>
      </div>
    );
  }
}
