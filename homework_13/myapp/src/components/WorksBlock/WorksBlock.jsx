import { Link } from 'react-router-dom';
import s from './WorksBlock.module.css';
import WorkItem from '../WorkItem/WorkItem';

export default function WorksBlock({ workList }) {

    const firstWorks = workList.slice(0, 3)

    return (
        <div className={s.container}>
            <h3 className={s.works_block_title}>Featured works</h3>
            <div className={s.works_wrapper}>
                {firstWorks.map(elem =>
                    <div className={s.work_card}>
                        <WorkItem
                            main_img={elem.main_img}
                            title={elem.title}
                            year={elem.year}
                            tags={elem.tags}
                            text={elem.text}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

