const useTraverseTree = () => {
  // Add a file or folder in tree
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const insertNode = (tree: any, folderId: any, item: any, isFolder: any) => {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder: isFolder,
        items: [],
      });
      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((ob: any) => {
      return insertNode(ob, folderId, item, isFolder);
    });
    return { ...tree, items: latestNode };
  };
  return { insertNode };
};

export default useTraverseTree;
