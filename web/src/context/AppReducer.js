const AppReducer = (state, action) => {
  switch (action.type){
    case 'removerDescobertas': 
      return {
        descobertas: state.descobertas.filter(descoberta => {
          return descoberta.id !== action.payload
        })
      }
    case 'removerComentarios': 
      return {
        comentarios: state.comentarios.filter(comentario => {
          return comentario.id !== action.payload
        })
      }
    default: 
      return state
  }
}

export default AppReducer;