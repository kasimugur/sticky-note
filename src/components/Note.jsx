import { useState } from "react"
import Draggable from "react-draggable"

export default function Note(note) {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Draggable defaultPosition={{ x: note.position.x, y: note.position.y }}>
        <div className="note-container" style={{
          '--color': note.color,
          position: 'absolute',
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