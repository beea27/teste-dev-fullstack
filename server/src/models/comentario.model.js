const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  assunto_comentario: String,
  descricao_comentario: String
});

const comentarios = mongoose.model('Comentarios', DataSchema);
module.exports = comentarios;

