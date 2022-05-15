import Comment from "./Comment";

function CommentsContainer({ comments }) {
    return (
        <div>
            <h2>{comments.length} Comments</h2>
            {comments.map(commentObj => 
                <Comment key={commentObj.id} comment={commentObj} />)}
        </div>
    )
}

export default CommentsContainer;