import { useContext, useState } from "react"
import Draggable from "react-draggable"
import { MainContext } from "../context"

export default function Note(note) {
  const [visible, setVisible] = useState(false)
  const { setMode } = useContext(MainContext)
  return (
    <>
      <Draggable defaultPosition={{ x: note.position.x, y: note.position.y }}>
        <div
          onMouseEnter={() => setMode(false)}
          onMouseLeave={() => setMode(true)}
          className="note-container" style={{
            '--color': note.color,
            position: 'absolute',
            top: 0,
            left: 0
          }}>
          <span onClick={() => setVisible(!visible)} className="note-box-number">{(note.number + 1) - 1} </span>
          <div className="note" style={{ display: visible ? 'flex' : 'none' }}>
            {note.note}
          </div>
        </div>
      </Draggable>
    </>
  )
}