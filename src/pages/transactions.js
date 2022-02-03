const Transactions = () => {
    return  <div className="row transactionsTab" style={{backgroundColor: 'greenyellow'}} id="body-row">
    <div id="sidebar-container" className=" col-4 side9 hidden">
      <ul className="list-group">
        <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
          <small>TRANSACTIONS</small>
        </li>
        <a href="#submenu1" data-toggle="collapse" aria-expanded="false" className="bg-dark list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-start align-items-center">
            <span className="menu-collapsed">Attendance transactions</span>
          </div>
        </a>
        <a href="#submenu2" data-toggle="collapse" aria-expanded="false" className="bg-dark list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-start align-items-center">
            <span className="menu-collapsed">Park Transactions</span>
          </div>
        </a>
        <a href="#submenu2" data-toggle="collapse" aria-expanded="false" className="bg-dark list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-start align-items-center">
            <span className="menu-collapsed">Elevator Transactions</span>
          </div>
        </a>
        <a href="#submenu2" data-toggle="collapse" aria-expanded="false" className="bg-dark list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-start align-items-center">
            <span className="menu-collapsed">Access Control Transactions</span>
          </div>
        </a>
      </ul>{/* List Group END*/}
    </div>{/* sidebar-container END */}
    {/* MAIN */}
    <div className="col-8 main9 hidden">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
            </th>
            <th scope="col">Status</th>
            <th scope="col">DeviceSN</th>
            <th scope="col">DeviceName</th>
            <th scope="col">DeviceIP</th>
            <th scope="col">RegisteryCode</th>
            <th scope="col">FirmwareVersion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
            </th>
            <td>Online</td>
            <td>CKJB201560042</td>
            <td>ProFace X[TD]</td>
            <td>10.0.10.148</td>
            <td>7GqFlsta</td>
            <td>ZAM170-NF-ST</td>
          </tr>
          <tr>
            <th scope="row">
              <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
            </th>
            <td>Offline</td>
            <td>FFB201584552</td>
            <td>SpeedFace</td>
            <td>10.0.10.135</td>
            <td>8Yhjgdda</td>
            <td>SEW-77G-yhf</td>
          </tr>
        </tbody>
      </table>
    </div>{/* Main Col END */}
  </div>
  };
  
  export default Transactions;