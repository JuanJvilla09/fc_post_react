import{useState, useEffect} from "react"
import CommentForm from "./CommentForm"
import ListComment from "./ListComment"
//Estado para los likes
const Post = () => {
    let [likes, setLikes] = useState(0);
    let updateLikes = () => setLikes(likes + 1);
    

//Estado para el comentario
    let [comment, setComment] = useState(false);
    let isShowComment = () => setComment(!comment);
    
    //funcion para obtener comentarios del formulario
    let [textComment, setTextComment] = useState("");

    let getCommentData = (comentario) =>{
        setTextComment(comentario)
        
    }

    let listComentarios =[
        {id:1, text:"Oye Parker... NOSOTROS también saltamos por ahí arriba. Pero NOSOTROS no hacemos turismo, hacemos... eh... reconocimiento 🖤 ¿Viste alguna cabeza por ahí? Pregunto por un amigo"},
        {id:2, text:"Linda foto, telarañas. NOSOTROS pensábamos que eras más del tipo 'selfies colgando boca abajo'. Aunque... esta vista nos da hambre. ¿Hay delivery a esta altura? 🍕😈"}
        
    ];

    let nextID = 3;
    let [id , setId] = useState(nextID)
    let [listData, setListData] = useState(listComentarios);

    useEffect(()=>{
        if(textComment){
        setListData([...listData, {id:id, text:textComment}]);
        setId(id+1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[textComment])

    

    //console.log(listComentarios);
    //console.log(listData);   
    
    return (
        <div className="facebook-post">
            {/* Post Header */}
            <div className="post-header">
                <img 
                    src="https://pressover.news/wp-content/uploads/2018/09/pegynjc4fge2jzwkqoqi-e1536231831944.png" 
                    alt="Profile" 
                    className="profile-pic" 
                />
                <div className="post-user-info">
                    <h6>Spiderman</h6>
                    <p className="post-time">2h · 🌐</p>
                </div>
            </div>

            {/* Post Content */}
            <div className="post-content">
                <p>Nueva York de noche: 8 millones de personas y yo soy el único que tiene que trabajar horas extra sin pago 🕷️ Al menos las vistas del 'trabajo' no están mal #VidaDeArañaNoEsFácil</p>
            </div>

            {/* Post Image */}
            <img 
                src="https://images.pexels.com/photos/2129796/pexels-photo-2129796.png" 
                alt="Night Sky" 
                className="post-image" 
            />

            {/* Post Stats */}
            <div className="post-stats">
                <span>👍❤️😮 {likes} others</span>
                <span>{listData.length} comments</span>
            </div>

            {/* Post Actions */}
            <div className="post-actions">
                <button 
                    className={`action-btn ${likes > 0 ? 'liked' : ''}`}
                    onClick={updateLikes}
                >
                    <span>👍</span> Like
                </button>
                <button 
                    className="action-btn"
                    onClick={isShowComment}
                >
                    <span>💬</span> Comment
                </button>
                <button className="action-btn">
                    <span>↗️</span> Share
                </button>
            </div>

            {/* Comment Section */}
            <div className="comment-section">
                {comment && <CommentForm getCommentData={getCommentData} />}
                <ListComment listComtData={listData} />
            </div>
        </div>
    );
};

export default Post;


