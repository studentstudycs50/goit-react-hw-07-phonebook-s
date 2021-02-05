import React from "react";
import { connect } from "react-redux";
import FilterStyled from '../Filter/FilterStyled';
import { setFilter } from "../../redux/actions/contactActions";

const Filter = ({ filter, setFilter }) => {
  const onChangeFilter = event => {
    const { value } = event.target;
    setFilter(value)
  }

  return (
      <FilterStyled>
        <label className="filter-title">
          Find contact by name
          <input type="text" name="filter" value={filter} onChange={onChangeFilter} className="filter-input"
          />
        </label>
    </FilterStyled>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: value => {
      dispatch(setFilter(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);