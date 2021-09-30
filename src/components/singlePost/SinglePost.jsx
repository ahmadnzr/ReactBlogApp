import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://i.imgur.com/9FFJh6k.png"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon fas fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Nizar</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
          pariatur et quasi obcaecati alias blanditiis eaque iusto, expedita
          praesentium! Ex unde neque ipsam fugit sunt voluptas modi sed
          doloribus quibusdam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aspernatur laborum voluptate quae tenetur nihil.
          Fugiat, veritatis! Ipsam quos facere rem autem atque vel illo aliquid
          ullam, cumque ratione, natus deleniti. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Harum quod corporis eum autem fuga
          repellendus officia suscipit. Quam nam consequatur dolorem architecto
          quis adipisci, ipsam eligendi dolores labore molestias voluptas.
        </p>
      </div>
    </div>
  );
}
