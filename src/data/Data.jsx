import React, {useState, createContext, useEffect} from "react"

export const DataContext = createContext();

export const DataProvider = props => {
  const [items, setItems] = useState([
    {
      id: 1,
      table: "in progress",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: "Sed vestibulum lectus sed dictum elementum.",
    },
    {
      id: 2,
      table: "in progress",
      title: "Fusce ut velit at ipsum laoreet mollis.",
      content: "Proin lobortis enim dignissim, lobortis nulla vel, dignissim purus.",
    },
    {
      id: 3,
      table: "done",
      title: "Phasellus in mauris dapibus, sodales augue eget, vulputate purus.",
      content: "Ut rutrum eros vel tellus ultrices, vel convallis ante faucibus.",
    },
    {
      id: 4,
      table: "open",
      title: "Nullam tristique lacus et massa porta, id tempus ante congue.",
      content: "Nunc eget sapien tristique, mollis urna nec, condimentum nunc.",
    },
    {
      id: 5,
      table: "in review",
      title: "Donec vitae ex blandit, laoreet nulla et, elementum purus.",
      content: "Proin at augue sit amet diam lobortis commodo.",
    }
  ]);

  useEffect(() => {
    const data = localStorage.getItem("items");
    if(data) {
      setItems(JSON.parse(data));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  })

  const [tables, setTables] = useState([
    {
      index: 1,
      name: "open",
    },
    {
      index: 2,
      name: "in progress",
    },
    {
      index: 3,
      name: "in review",
    },
    {
      index: 4,
      name: "done",
    },
  ]);

  useEffect(() => {
    const data = localStorage.getItem("tables");
    if(data) {
      setTables(JSON.parse(data));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("tables", JSON.stringify(tables));
  })

  const [recentItems, setRecentItems] = useState([
    {
      id: 1,
      item_id: 1,
    },
    {
      id: 2,
      item_id: 2,
    },
    {
      id: 3,
      item_id: 3,
    },
    {
      id: 4,
      item_id: 4,
    },
    {
      id: 5,
      item_id: 5,
    }
  ]);

  useEffect(() => {
    const data = localStorage.getItem("recentItems");
    if(data) {
      setRecentItems(JSON.parse(data));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("recentItems", JSON.stringify(recentItems));
  })

  return(
    <div>
      <DataContext.Provider value={[items, setItems, tables, setTables, recentItems, setRecentItems]}>
        {props.children}
      </DataContext.Provider>
    </div>
  )
}