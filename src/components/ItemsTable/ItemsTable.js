import React from 'react';
import './ItemsTable.css';

export default class TableList extends React.Component {

  constructor(props) {
    super(props);

    this.onRowClick = this.onRowClick.bind(this);
  }

  onRowClick(id) {
    this.props.rowClickHandler(id);
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
                {headlines.map((headline)=><th key={headline}>{headline}</th>)}
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
                        headlines.map((headline)=><td key={headline}>{item[headline]}</td>)
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
