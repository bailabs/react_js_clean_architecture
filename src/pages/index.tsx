import { decrement, increment, incrementByAmount } from "app/redux/counter/counter.slice"
import Plant from "domain/entities/Plant"
import { useState } from "react"

import { useAppDispatch, useAppSelector } from "../app/redux/hooks"
import { fetchList } from "../app/redux/plant/plant.slice"

export default function Home() {
    const [amount, setAmount] = useState(0)

    const { plants, loading, value } = useAppSelector((state) => ({
        plants: state.plantSlice.plants,
        loading: state.plantSlice.loading,
        value: state.counterSlice.value,
    }))

    const dispatch = useAppDispatch()

    const handleAmountChange = (e: any) => {
        setAmount(parseFloat(e.target.value))
    }

    const handleClick = () => {
        dispatch(fetchList())
    }

    const handleSubmitAmount = () => {
        dispatch(incrementByAmount(amount))
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                columnGap: 50,
            }}
        >
            <div>
                <h2>Async Reducer</h2>
                <button type="button" onClick={handleClick} disabled={loading}>
                    Refresh
                </button>
                <ul>
                    {plants.map((item: Plant) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Sync Reducer</h2>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        width: 300,
                    }}
                >
                    <button type="button" onClick={() => dispatch(increment())} disabled={loading}>
                        +1
                    </button>
                    <button type="button" onClick={() => dispatch(decrement())} disabled={loading}>
                        -1
                    </button>
                    <div>
                        <input type="number" placeholder="increment by amount" onChange={handleAmountChange} />
                        <button type="button" onClick={handleSubmitAmount} disabled={loading}>
                            Submit
                        </button>
                    </div>
                </div>
                <div style={{ textAlign: "center" }}>
                    <h2>{value}</h2>
                </div>
            </div>
        </div>
    )
}
