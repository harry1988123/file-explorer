import { useState } from 'react';
import './App.css';
import Folder from './components/Folder';
import folderData from './data/folderData';
import useTraverseTree from './hooks/use-traverse-tree';

function App() {

  const [data, setData] = useState(folderData);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId: any, item: any, isFolder: any) => {
    const finalTree = insertNode(data, folderId, item, isFolder);
    setData(finalTree);
  };

  return (
    <div className="App">
      <Folder data={data} key={data.id} handleInsertNode={handleInsertNode} />
    </div>
  );
}

export default App;
