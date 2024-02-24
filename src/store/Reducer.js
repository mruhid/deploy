
let temp =localStorage.getItem('basket')

const initalState = {
    number: 0,
    items: temp? JSON.parse(temp):[]
}

export default function Reducer(state = initalState, action) {
    switch (action.type) {
        case 'setBasket':
            return { ...state, items: [action.payload] };

    }
    return state

}