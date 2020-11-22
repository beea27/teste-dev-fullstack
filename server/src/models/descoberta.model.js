const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  nome_descoberta: String,
  data_descoberta: String,
  horario_descoberta: String,
  descricao_descoberta: String
});

const descobertas = mongoose.model('Descobertas', DataSchema);
module.exports = descobertas;

