
import { createStore } from "redux"

const initialState = {
    name: "",
    category: "",
    author_first: "",
    author_last: "",
    ingredients: [],
    instructions: []
}

export const UPDATE_NAME = "UPDATE_NAME"
export const UPDATE_CATEGORY = "UPDATE_CATEGORY"
export const UPDATE_AUTHOR_FIRST = "UPDATE_AUTHOR_FIRST"
export const UPDATE_AUTHOR_LAST = "UPDATE_AUTHOR_LAST"
export const ADD_INGREDIENT = "ADD_INGREDIENTS"
export const ADD_INSTRUCTION = "ADD_INSTRUCTION"


function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_NAME: return { ...state, name: payload }
        case UPDATE_CATEGORY: return { ...state, category: payload }
        case UPDATE_AUTHOR_FIRST: return { ...state, category: payload }
        case UPDATE_AUTHOR_LAST: return { ...state, category: payload }
        case ADD_INGREDIENT:
            const newIngredients = [...state.ingredients, payload]
            return { ...state, ingredients: newIngredients }
        case ADD_INSTRUCTION:
            const newInstruction = [...state.ingredients, payload]
            return { ...state, instructions: newInstructions }

        default: return state;
    }
}

export default createStore(reducer)