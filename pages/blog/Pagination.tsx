import React, { Component } from "react";
import PropTypes from "prop-types";
import BsPagination  from "react-bootstrap/Pagination";

class Pagination extends Component {
  handleOnSelect = (page: any) => this.props.onPageClick(page);

  handleViewAllPages = (e: any) => {
    e.preventDefault();
    this.handleOnSelect(0);
  };

  render() {
    const { numberOfPages, maxButtons, activePage, viewAll } = this.props;

    if (numberOfPages <= 1) return null;

    return (
      <div>
        <BsPagination
          activePage={activePage}
          items={numberOfPages}
          maxButtons={maxButtons}
          first
          last
          next
          prev
          onSelect={this.handleOnSelect}
        />
      </div>
    );
  }
}


export default Pagination;
