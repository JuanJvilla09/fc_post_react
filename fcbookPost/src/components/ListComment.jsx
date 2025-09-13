let ListComment = ({listComtData})=>{
    return(
        <div className="comments-list">
            {
                listComtData.map((list)=>(
                    <div key={list.id} className="comment-item">
                        <img 
                            src="https://i.pinimg.com/736x/7b/1d/27/7b1d27d53f5385dea896e72a5e54653d.jpg" 
                            alt="Commenter" 
                            className="comment-avatar" 
                        />
                        <div className="comment-content">
                            <p className="comment-author">Venom</p>
                            <p className="comment-text">{list.text}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ListComment