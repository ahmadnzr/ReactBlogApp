import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img
        src="https://wallpapercave.com/wp/wp7563533.jpg"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
          <div className="postCat">
              <span className="postCat">Life</span>
              <span className="postCat">Style</span>
          </div>
          <span className="postTitle">
             Lorem ipsum dolor sit amet. 
          </span>
          <hr/>
          <span className="postDate">
              1 hour ago
          </span>
      </div>
      <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ad consequatur ratione nam architecto voluptate autem, placeat ipsa omnis eligendi eius id sed nesciunt? Omnis eum explicabo nemo obcaecati saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora deleniti ea adipisci consectetur, maxime voluptatem laborum! Sed ipsa cumque, amet tenetur eius ducimus fugiat nesciunt ad quos voluptatum itaque inventore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae commodi ipsa labore harum nobis! A tempora, nobis qui quia accusantium praesentium mollitia repudiandae vitae, optio quas, accusamus fugiat tenetur ab.
      </p>
    </div>
  );
}
