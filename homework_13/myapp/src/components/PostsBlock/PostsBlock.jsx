import s from './PostsBlock.module.css';
import PostItem from '../PostItem/PostItem';

export default function PostsBlock({blogList}) {

  const firstTwoPosts = blogList.slice(0, 2);

  return (
    <div className={s.section}>
      <div className={s.container}>
        <div className={s.title_wrapper}>
          <h3>Recent posts</h3>
          <p>View all</p>
        </div>
        <div className={s.posts_wrapper}>
          {firstTwoPosts.map(elem =>
            <div key={elem.id} className={s.post_card}>
              <PostItem
                id={elem.id}
                title={elem.title}
                date={elem.date}
                text={elem.text}
                tags={elem.tags}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}











{/* {blog_data.slice(0, 2).map(elem => (
            <div className={s.post_card} key={elem.id}>
              <h2 style={{ whiteSpace: 'pre-line' }}>
                {/\bin\b/.test(elem.title) ? elem.title.replace(/\bin\b/, 'in\n') : elem.title.replace(/\bfrom\b/, 'from\n')}
              </h2>
              <div className={s.descr_wrapper}>
                <p>
                  {`${new Date(elem.date).getDate()} ${new Date(elem.date).toLocaleString('en-US', {
                    month: 'short',
                    year: 'numeric',
                  })}`}
                </p>
                <p style={{ margin: '0 25px' }}>|</p>
                <p>{`${elem.tags[0]}, ${elem.tags[1]}`}</p>
                <div />
              </div>
              <p style={{ textAlign: 'left' }}>{elem.text}</p>
            </div>
          ))} */}