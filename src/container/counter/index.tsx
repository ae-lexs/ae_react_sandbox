import { useStoreDispatch, useStoreSelector } from '../../store/hooks';
import { decrement, increment, selectCounterValue } from '../../store/slice/counter';


export default function Counter() {
    const counterValue = useStoreSelector(selectCounterValue);
    const dispatch = useStoreDispatch();

    return (
        <div>
            <div>
                <button
                    type='button'
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{counterValue}</span>
                <button
                    type='button'
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    );   
}
