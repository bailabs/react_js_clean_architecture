import Head from "next/head"

import { useAppDispatch, useAppSelector } from "../app/redux/hooks"
import { fetchList } from "../app/redux/item/item.slice"
import styles from "../styles/Home.module.css"

export default function Home() {
    const items = useAppSelector((state) => state.items.items)
    const loading = useAppSelector((state) => state.items.loading)
    const dispatch = useAppDispatch()
    const handleClick = () => {
        dispatch(fetchList())
    }
    return (
        <div>
            <button onClick={handleClick} disabled={loading}>
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
