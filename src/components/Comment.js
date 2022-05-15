function Comment ({ comment }) {
    return (
        <div>
            <h3>{comment.user}</h3>
            <div>{comment.comment}</div>
        </div>
    )
}

export default Comment;