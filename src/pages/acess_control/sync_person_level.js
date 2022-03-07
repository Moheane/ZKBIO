const sync_person_level = () => {
    return  <table className="table">
    <thead>
      <tr>
        <th scope="col">
          <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
        </th>
        <th scope="col">Status</th>
        <th scope="col">syncp</th>
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

  };
  
  export default sync_person_level;