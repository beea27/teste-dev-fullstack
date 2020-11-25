const Usuario = require('../models/usuario.model');
const jwt = require("jsonwebtoken");
const secret = "mysecret"

module.exports = {
  async index(request, response){
    const user = await Usuario.find();
    response.json(user);
  },

  async create(request, response){
    const {nome_usuario, email_usuario, senha_usuario} = request.body

    let data = {};

    let user = await Usuario.findOne({email_usuario});
    if(!user){
      data = {nome_usuario, email_usuario, senha_usuario}
      user = await Usuario.create(data);
      return response.status(200).json(user);
    }else{
      return response.status(500).json(user);
    }
  },

  async details(request, response){
    const {_id} = request.params;
    const user = await Usuario.findOne({_id});
    response.json(user);
  },

  async delete(request, response){
    const {_id} = request.params;
    const user = await Usuario.findByIdAndDelete({_id});
    return response.json(user);
  },

  async update(request, response){
    const {_id, nome_usuario, email_usuario, senha_usuario} = request.body;
    const data = {nome_usuario, email_usuario, senha_usuario};
    const user = await Usuario.findOneAndUpdate({_id}, data, {new:true});
    response.json(user);
  },

  async login(request, response){
    const {email, senha} = request.body;
    Usuario.findOne({email_usuario: email}, function(err, user){
      if(err){
        response.status(200).json({erro: "Erro no servidor. Por favor, tente novamente"});
      }
      else if(!user){
        response.status(200).json({status:2, error: 'E-mail não encontrado no banco de dados'});
      }
      else{
        user.isCorrectPassword(senha, async function (err, same){
          if(err){
            response.status(200).json({error: "Erro no servidor. Por favor, tente novamente"});
          }
          else if(!same){
            response.status(200).json({status:2, error: "A senha não confere"})
          }
          else{
            const payload = {email}
            const token = jwt.sign(payload, secret, {
              expiresponseIn: '24h'
            })
            response.cookie('token', token, {httpOnly: true});
            response.status(200).json({status:1, auth:true, token:token, id_client: user._id, user_name: user.nome_usuario})
          }
        })
      }
    })
  },

  async checkToken(request, response){
    const token = request.body.token || request.query.token || request.cookies.token || request.headers['x-access-token'];
    if(!token){
      response.json({status:401, msg:'Não autorizado: Token inexistente!'})
    }
    else{
      jwt.verify(token, secret, function(err, decoded){
        if(err){
          response.json({status:401, msg:'Não autorizado: Token inválido!'});
        }
        else{
          response.json({status:200})
        }
      })
    }
  },

  async destroyToken(request,response){
    const token = request.headers.token;
    if(token){
        response.cookie('token',null,{httpOnly:true});
    }else{
        response.status(401).send("Logout não autorizado!")
    }
    response.send("Sessão finalizada com sucesso!");
}
}