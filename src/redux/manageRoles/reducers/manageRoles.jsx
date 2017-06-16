import Immutable from 'immutable'

let initialState = {
  'status_message': '',
  'user_documents': [],
  'username': '',
  'rolesData': {}
}

export function manageRoles (state = Immutable.fromJS(initialState), action) {
  if (action.type === 'ACTION_SUCCESS_USER_PROFILE') {
    return state
    .set('username', action.username)
  } else if (action.type === 'empty_user_profile') {
    return state.set('status_message', action.payload)
  } else if (action.type === 'error_user_profile') {
    return state.set('status_message', action.payload)
  } else if (action.type === 'ACTION_SUCCESS_USER_DOCUMENT') {
    return state.set('user_documents', action.payload.user_document_info)
  } else if (action.type === 'ACTION_ERROR_USER_DOCUMENT') {
    return state.set('status_message', action.payload).set('user_documents', [])
  } else if (action.type === 'ACTION_SUCCESS_LIST_ROLES') {
    return state.set('rolesData', action.payload)
  } else if (action.type === 'ACTION_EMPTY_LIST_ROLES') {
    return state.set('rolesData', action.payload)
  } else if (action.type === 'ACTION_ERROR_LIST_ROLES') {
    return state.set('rolesData', action.payload)
  } else {
    return state.set('status_message', '')
  }
}
