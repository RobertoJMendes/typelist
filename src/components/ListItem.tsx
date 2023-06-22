import { useState } from "react";
import { Item } from "../types/Item"
import "./ListItem.css"
type Props = {
  item: Item
}

const ListItem = ({item}:Props) => {
  const[ isChecked, setIsChecked] = useState(item.done)
  return (
    <div className="Lst">
      <input 
      type="checkbox" 
      checked={isChecked}
      onChange={e=>setIsChecked(e.target.checked)}
      />
      <label
      className={ isChecked ? "done" : "" }
      >
      {item.name}
      </label>     
    </div>
  )
}
export default ListItem;