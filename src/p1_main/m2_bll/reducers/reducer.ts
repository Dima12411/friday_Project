let initState: any = []

export const Reducer = (state = initState, action: any) => {
    switch (action.type) {
        case 'someCase': {
            return state
        }
        default:
            return state
    }
}