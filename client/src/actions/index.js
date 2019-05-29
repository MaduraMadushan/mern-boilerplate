import api from './../api';

export const test = () => async dispatch => {
    const response = await api.get('/test');
    dispatch({type: 'TEST', payload: response.data});
}