const Comentario = require('../models/comentario.model');

module.exports = {
  async index(req, res){
    const comentario = await Comentario.find();
    res.json(comentario);
  },

  async create(req, res){
    const {assunto_comentario, descricao_comentario} = req.body

    let data = {};

    let comentario = await Comentario.findOne({assunto_comentario});
    if(!comentario){
      data = {assunto_comentario, descricao_comentario}
      comentario = await Comentario.create(data);
      return res.status(200).json(comentario);
    }else{
      return res.status(500).json(comentario);
    }
  },

  async details(req, res){
    const {_id} = req.params;
    const comentario = await Comentario.findOne({_id});
    res.json(comentario);
  },

  async delete(req, res){
    const {_id} = req.params;
    const comentario = await Comentario.findByIdAndDelete({_id});
    return res.json(comentario);
  },

  async update(req, res){
    const {_id, assunto_comentario, descricao_comentario} = req.body;
    const data = {assunto_comentario, descricao_comentario};
    const comentario = await Comentario.findOneAndUpdate({_id}, data, {new:true});
    res.json(comentario);
  },
}