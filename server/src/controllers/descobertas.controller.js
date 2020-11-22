const Descoberta = require('../models/descoberta.model');

module.exports = {
  async index(req, res){
    const descoberta = await Descoberta.find();
    res.json(descoberta);
  },

  async create(req, res){
    const {nome_descoberta, data_descoberta, horario_descoberta, descricao_descoberta} = req.body

    let data = {};

    let descoberta = await Descoberta.findOne({nome_descoberta});
    if(!descoberta){
      data = {nome_descoberta, data_descoberta, horario_descoberta, descricao_descoberta}
      descoberta = await Descoberta.create(data);
      return res.status(200).json(descoberta);
    }else{
      return res.status(500).json(descoberta);
    }
  },

  async details(req, res){
    const {_id} = req.params;
    const descoberta = await Descoberta.findOne({_id});
    res.json(descoberta);
  },

  async delete(req, res){
    const {_id} = req.params;
    const descoberta = await Descoberta.findByIdAndDelete({_id});
    return res.json(descoberta);
  },

  async update(req, res){
    const {_id, nome_descoberta, data_descoberta, horario_descoberta, descricao_descoberta} = req.body;
    const data = {nome_descoberta, data_descoberta, horario_descoberta, descricao_descoberta};
    const descoberta = await Descoberta.findOneAndUpdate({_id}, data, {new:true});
    res.json(descoberta);
  },
}