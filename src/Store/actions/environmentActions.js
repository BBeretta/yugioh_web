import { INITIALIZE_ENVIRONMENT, NORMAL_SUMMON, SET_SUMMON } from "./actionTypes";
/**
 * Initialize the environment, only called by Game.jsx
 * @param {*} environment 
 */
export const initialize_environment = environment => ({
    type: INITIALIZE_ENVIRONMENT,
    payload: {
        // initialized status
        environment
    }
});

export const normal_summon = info => ({
    type: NORMAL_SUMMON,
    payload: {
        info
    }
})

export const set_summon = info => ({
    type: SET_SUMMON,
    payload: {
        info
    }
})