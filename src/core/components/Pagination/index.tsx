import './styles.scss';
import { generateList } from "core/utils/list";
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';

type Props = {
    totalPages: number;
    activePage: number;
    onChange: (item: number) => void;
}

const Pagination = ({ totalPages, activePage, onChange }: Props) => {

    const paginationItems = generateList(totalPages)
    const previousClass = totalPages > 0 && activePage > 0 ? 'page-active' : 'page-inactive';
    const nextClass = totalPages > 0 && activePage + 1 < totalPages ? 'page-active' : 'page-inactive';

    return (
        <div className="pagination-container">
            <ArrowIcon
                className={`pagination-previous ${previousClass}`}
                onClick={() => onChange(activePage - 1)}
            />
            {paginationItems.map(item => (
                <div
                    key={item}
                    className={`pagination-item ${item === activePage ? 'active' : ''}`}
                    onClick={() => onChange(item)}
                >
                    {item + 1}
                </div>
            ))}
            <ArrowIcon
                className={`pagination-next ${nextClass}`}
                onClick={() => onChange(activePage + 1)}
            />
        </div>
    );
}

export default Pagination;