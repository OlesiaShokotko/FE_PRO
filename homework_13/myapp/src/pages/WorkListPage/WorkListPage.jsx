import { Link } from 'react-router-dom';
import s from './WorkListPage.module.css';
import WorkItem from '../../components/WorkItem/WorkItem';

export default function WorkListPage({ workList }) {
    return (
        <div className={s.container}>
            <h1 className={s.work_title}>Work</h1>
            {workList.map(elem =>
                <Link
                    key={elem.id}
                    to={`/work/${elem.id}`}
                    style={{ textDecoration: 'none', color: '#21243D' }}>
                    <WorkItem
                        main_img={elem.main_img}
                        title={elem.title}
                        year={elem.year}
                        tags={elem.tags}
                        text={elem.text}
                    />
                </Link>
            )}
        </div>
    )
}