const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  const { q, nombre = "No Name", apikey, page = 1, limit = 10 } = req.query;

  res.status(200).json({
    msg: "get API - controlador",
    q,
    nombre,
    apikey,
    page,
    limit,
  });
};

const usuariosPut = (req, res) => {
  const id = req.params.id;

  res.status(403).json({
    msg: "put API - controlador",
    id,
  });
};

const usuariosPost = (req, res) => {
  const { nombre, edad } = req.body;

  res.status(403).json({
    msg: "post API - controlador",
    nombre,
    edad,
  });
};

const usuariosDelete = (req, res) => {
  res.status(403).json({
    msg: "delete API - controlador",
  });
};

const usuariosPatch = (req, res) => {
  res.status(403).json({
    msg: "patch API - controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
};
