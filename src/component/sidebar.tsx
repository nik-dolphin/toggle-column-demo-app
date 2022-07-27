import React, { FC } from 'react'

const Sidebar:FC<{isOpen: any; ToggleSidebar: any; handleColLeft:any; handleMenu2:any}> = ({isOpen, ToggleSidebar, handleColLeft, handleMenu2}) => {
  
  return (
    <>
    <div className={`sidebar ${isOpen === true ? "active" : ""}`}>
        <div className="sd-header">
          <h4 className="mb-0">Sidebar Header</h4>
          <div className="btn btn-primary" onClick={ToggleSidebar}>
            <i className="fa fa-times"></i>
          </div>
        </div>
        <div className="sd-body">
          <ul>
            <li>
              <button className="sd-link" onClick={handleColLeft}>
                Menu Item 1
              </button>
            </li>
            <li>
              <button className="sd-link" onClick={handleMenu2}>Menu Item 2</button>
            </li>
            <li>
              <button className="sd-link">Menu Item 3</button>
            </li>
            <li>
              <button className="sd-link">Menu Item 4</button>
            </li>
            <li>
              <button className="sd-link">Menu Item 5</button>
            </li>
            <li>
              <button className="sd-link">Menu Item 6</button>
            </li>
            <li>
              <button className="sd-link">Menu Item 7</button>
            </li>
            <li>
              <button className="sd-link">Menu Item 8</button>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={` ${isOpen === true ? "active" : ""}`}
        onClick={ToggleSidebar}
      ></div>
      </>
  )
}

export default Sidebar