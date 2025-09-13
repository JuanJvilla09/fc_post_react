import{useState} from "react"

let CommentForm = ({getCommentData})=>{
    let [comentario, setComentario] = useState("")
    
    let getComentario = (e) => {
        setComentario(e.target.value)
    }

    let handleSubmit = () => {
        if(comentario.trim()) {
            getCommentData(comentario)
            setComentario("")
        }
    }
    return(
        <div className="comment-form">
            <img 
                src="https://i.pinimg.com/736x/7b/1d/27/7b1d27d53f5385dea896e72a5e54653d.jpg" 
                alt="Your avatar" 
                className="comment-avatar" 
            />
            <div className="comment-input-container">
                <textarea 
                    className="comment-input" 
                    placeholder="Write a comment..." 
                    value={comentario} 
                    onChange={getComentario}
                    rows="1"
                />
                {comentario.trim() && (
                    <button 
                        className="comment-submit"
                        onClick={handleSubmit}
                    >
                        Post
                    </button>
                )}
            </div>
        </div>
    );
};

export default CommentForm