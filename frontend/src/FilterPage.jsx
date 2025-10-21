import React from "react";
import "./FilterPage.css";

const FilterPage = ({show, onClose}) => {
    if (!show) return null;

    return (
        <div className="filter">
            <div className="filter-page">
                <div className="filter-header">
                    <h2>Filters</h2>
                    <button className="close-button" onClick={onClose}>X</button>
                </div>
                <div className="filter-sidebar">
                    <div className="filter-sidebar">
                       <ul>
                        <li className="active">Sort by</li>
                        <li>Cusines</li>
                        <li>Ratings</li>                     
                       </ul>
                    </div>

                    <div className="filter-content">
                        <h4>Sort by</h4>
                        <label><input type="radio" name="sort" defaultChecked />Popularity</label>
                        <label><input type="radio" name="sort" />Rating: Low to High</label>
                        <label><input type="radio" name="sort" />Cost: High to Low</label>
                        <label><input type="radio" name="sort" />Cost: Low to High</label>
                    </div>
                </div>

                <div className="filter-footer">
                    <button className="clear-button">Clear Filters</button>
                    <button className="apply-button">Apply</button>
                </div>
            </div>   
        </div>
    );
}

export default FilterPage;
