import { useContext, useState } from "react"
import { MainContext } from "../context"

export default function NoteBox() {
  const types = [
    {
      name: "comment",
      color: "red",
      text: "yorum"
    },
    {
      name: "private-comment",
      color: "#999",
      text: "gizli yorum"
    },
    {
      name: "note",
      color: "orange",
      text: "Not"
    }
  ]
  const { boxPosition, setMode, notes } = useContext(MainContext)
  const [color, setColor] = useState(types[0].color)
  const changeColor = (e) => {
    setColor(e.target.value)
  }
  return (
    <>
      <div
        onMouseEnter={() => setMode(false)}
        onMouseLeave={() => setMode(true)}
        className="note-box"
        style={{ "--color": color, position: 'absolute', top: boxPosition.y, left: boxPosition.x }}>
        <span className="note-box-number">{notes.length + 1} </span>
        <select onChange={changeColor}>
          {types.map((type, index) => (
            <option style={{opacity: 0.5}} key={index} value={type.color} >{type.text} </option>
          ))}
        </select>
        <textarea cols="20" rows="5" placeholder="notunuzu giriniz" />
      </div>
    </>
  )
}