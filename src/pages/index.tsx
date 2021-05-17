import { useAppDispatch, useAppSelector } from "../app/redux/hooks"
import { fetchList } from "../app/redux/item/item.slice"

export default function Home() {
    const items = useAppSelector((state) => state.items.items)
    const loading = useAppSelector((state) => state.items.loading)
    const dispatch = useAppDispatch()
    const handleClick = () => {
        dispatch(fetchList())
    }
    return (
        <div>
            <button type="button" onClick={handleClick} disabled={loading}>
                Refresh
            </button>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}
