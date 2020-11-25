const Comentario = require('../models/comentario.model');

module.exports = {
  async index(request, response){
    const comentario = await Comentario.find();
    response.json(comentario);
  },

  async create(request, response){
    const {assunto_comentario, descricao_comentario} = request.body;

    let data = {};

    let comentario = await Comentario.findOne({assunto_comentario});
    if(!comentario){
      data = {assunto_comentario, descricao_comentario}
      comentario = await Comentario.create(data);
      return response.status(200).json(comentario);
    }else{
      return response.status(500).json(comentario);
    }
  },

  async details(request, response){
    const {_id} = request.params;
    const comentario = await Comentario.findOne({_id});
    response.json(comentario);
  },

  async delete(request, response){
    const {_id} = request.params;
    const comentario = await Comentario.findByIdAndDelete({_id});
    return response.json(comentario);
  },

  async update(request, response){
    const {_id, assunto_comentario, descricao_comentario} = request.body;
    const data = {assunto_comentario, descricao_comentario};
    const comentario = await Comentario.findOneAndUpdate({_id}, data, {new:true});
    response.json(comentario);
  },
}