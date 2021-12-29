import React, { Component } from "react";
import BsPagination from "react-bootstrap/Pagination";

type PaginationProps = {
  onPageClick: any
  numberOfPages: any
  maxButtons: any
  activePage: any
  viewAll: any
}
class Pagination extends Component<PaginationProps> {
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
          onSelect={this.handleOnSelect}
        />
      </div>
    );
  }
}


export default Pagination;
