import { useState } from "react"

export default function Note(note) {
  const [visible, setVisible] = useState(false)
  return (
    <>
    <div className="note-container" style={{
      '--color' : note.color,
      position: 'absolute', top: note.position.y, left: note.position.x
    }}>
<span onClick={() => setVisible(!visible)} className="note-box-number">{(note.number + 1) - 1} </span>
<div className="note" style={{display: visible ? 'flex' : 'none'}}>
  {note.note}
</div>
    </div>
    </>
  )
}