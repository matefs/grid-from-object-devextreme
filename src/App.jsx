import { useState } from 'react';
import './App.css';
import {DataGrid, SearchPanel} from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.dark.css'; 
function App() {

  const dataObject = {
    name: ["John Doe", "Jane Smith", "Bob Johnson"],
    age: [30, 25, 40],
    email: ["john.doe@example.com", "jane.smith@example.com", "bob.johnson@example.com"]
  };

  const columns = Object.keys(dataObject).map(key => {
    return { dataField: key, caption: key.charAt(0).toUpperCase() + key.slice(1) };
  });

  const data = [];
  for (let i = 0; i < dataObject.name.length; i++) {
    const item = {};
    Object.keys(dataObject).forEach(key => {
      item[key] = dataObject[key][i];
    });
    data.push(item);
  }


  return (
    <>
      <p className="read-the-docs">Devextreme react datagrid</p>
      <DataGrid
        dataSource={data}
        columns={columns} 
        columnHidingEnabled={true}
        editing={{ allowUpdating: true }}
      >
          <SearchPanel visible={true} /> 
      </DataGrid>
    </>
  );
}

export default App;
