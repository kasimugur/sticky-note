import { useContext } from "react"
import { MainContext } from "../context"

export default function LeaveCommentText() {
  const { position } = useContext(MainContext)
  return (
    <>
      <div className="leave-comment-text" style={{ position: 'fixed', top: position.y, left: position.x + 20 }}> yorum yazmak için tıkla</div>
    </>
  )
}