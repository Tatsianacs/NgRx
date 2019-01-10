import {Action} from "@ngrx/store";
import {Ingredient} from "../shared/ingredient.model";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

const initialState = {
    ingredients: [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
    ]
};

export function shoppingListReducer(state = initialState, action: Action) {
    switch (action.type) {
        case ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action]
            }
    }
        return state;
}
