import React from 'react';
import './ItemsTable.css';

export default class TableList extends React.Component {

  constructor(props) {
    super(props);

    this.onRowClick = this.onRowClick.bind(this);
    this.formatDate = this.formatDate.bind(this);
  }

  onRowClick(id) {
    this.props.rowClickHandler(id);
  }

  formatDate(date){
    const end = date.indexOf('.');
    return date.slice(0, end).replace(/T/, ' at ');
  }

  render() {

    const headlines = Object.keys(this.props.loadEntities[0]);

    const rowItems = this.props.loadEntities;

    return (
      <div className="items-table">
        <div className="divider"/>
        {
          headlines ?
            <table className="table table-striped table-hover">
              <thead className="table--head">
              <tr>
                {headlines.map((headline)=><th key={headline}>{headline.replace(/_/g, ' ')}</th>)}
              </tr>
              </thead>
              <tbody>
              {
                rowItems.map((item)=> {
                  return (
                    <tr
                      onClick={() => this.onRowClick(item.id)}
                      key={`tr-${item.id}`}
                      className="table-row__active">
                      {
                        headlines.map((headline)=> {
                          const isDate = headline === 'created_at' || headline === 'updated_at';
                          return <td key={headline}>{isDate? this.formatDate(item[headline]): item[headline].toString()}</td>
                        })
                      }
                    </tr>)
                })
              }
              </tbody>
            </table> :
            null
        }
      </div>
    );
  }
}
