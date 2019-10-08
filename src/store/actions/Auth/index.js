import * as types from '../../constants/Auth/index'

const changeIsAuthorized = payload => ({
    type: types.CHANGE_IS_AUTHORIZED,
    payload
});

exports = {
    changeIsAuthorized
}