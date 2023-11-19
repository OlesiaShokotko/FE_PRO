import PostItem from "../../components/PostItem/PostItem";
import s from "./BlogPage.module.css";

export default function BlogPage({ blogList }) {
  return (
    <div className={s.container}>
      <h1 className={s.postList_title}>Blog</h1>
      <div>
        {blogList.map((elem) => (
          <div>
            <PostItem
              key={elem.id}
              id={elem.id}
              title={elem.title}
              date={elem.date}
              text={elem.text}
              tags={elem.tags}
            />
            <img style={{ margin: "30px 0" }} src="vector.png" />
          </div>
        ))}
      </div>
    </div>
  );
}
