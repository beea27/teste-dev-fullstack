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

    case 'adicionarComentarios':
      return {
        comentarios: [action.payload, ...state.comentarios]
      }

    case 'adicionarDescobertas':
      return {
        descobertas: [action.payload, ...state.descobertas]
      }

    case 'editarDescobertas':
      const updateDescoberta = action.payload;
      
      const updateDescobertas = state.descobertas.map(descoberta => {
        if(descoberta.id === updateDescoberta.id){
          return updateDescoberta;
        }
        return descoberta;
      })

      return{
        descobertas: updateDescobertas
      }

    case 'editarComentarios':
      const updateComentario = action.payload;
      
      const updateComentarios = state.comentarios.map(comentario => {
        if(comentario.id === updateComentario.id){
          return updateComentario;
        }
        return comentario;
      })

      return{
        comentarios: updateComentarios
      }
      
    default: 
      return state
  }
}

export default AppReducer;