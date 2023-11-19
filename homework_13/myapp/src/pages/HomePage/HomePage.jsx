import MainBlock from '../../components/MainBlock/MainBlock';
import PostsBlock from '../../components/PostsBlock/PostsBlock';
import WorksBlock from '../../components/WorksBlock/WorksBlock';

export default function HomePage({workList, blogList}) {


    return (
        <div>
            <MainBlock/>
            <PostsBlock blogList={blogList}/>
            <WorksBlock workList={workList}/>
        </div>
    )
}