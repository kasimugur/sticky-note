import { useContext } from "react"
import { MainContext } from "../context"

export default function NoteBox() {
  const { boxPosition } = useContext(MainContext)
  const types = [
    {
      name: "comment" ,
      color: "red",
      text:   "yorum"
    },
    {
      name: "private-comment",
      color: "#999" ,
      text: "gizli yorum"
    },
    {
      name: "note",
      color: "orange",
      text: "Not"
    }
  ]

  return (
    <>
      <div className="note-box" style={{position: 'absolute' , top: boxPosition.y , left: boxPosition.x}}>
        <select>
          {types.map(type => (
            <option value={type.name} >{type.name} </option>
          ))}
        </select>
      </div>
    </>
  )
}