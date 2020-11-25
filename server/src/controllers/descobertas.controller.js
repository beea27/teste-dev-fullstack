const Descoberta = require('../models/descoberta.model');

module.exports = {
  async index(request, response){
    const descoberta = await Descoberta.find();
    response.json(descoberta);
  },

  async create(request, response){
    const {nome_descoberta, data_descoberta, horario_descoberta, descricao_descoberta} = request.body

    let data = {};

    let descoberta = await Descoberta.findOne({nome_descoberta});
    if(!descoberta){
      data = {nome_descoberta, data_descoberta, horario_descoberta, descricao_descoberta}
      descoberta = await Descoberta.create(data);
      return response.status(200).json(descoberta);
    }else{
      return response.status(500).json(descoberta);
    }
  },

  async details(request, response){
    const {_id} = request.params;
    const descoberta = await Descoberta.findOne({_id});
    response.json(descoberta);
  },

  async delete(request, response){
    const {_id} = request.params;
    const descoberta = await Descoberta.findByIdAndDelete({_id});
    return response.json(descoberta);
  },

  async update(request, response){
    const {_id, nome_descoberta, data_descoberta, horario_descoberta, descricao_descoberta} = request.body;
    const data = {nome_descoberta, data_descoberta, horario_descoberta, descricao_descoberta};
    const descoberta = await Descoberta.findOneAndUpdate({_id}, data, {new:true});
    response.json(descoberta);
  },
}