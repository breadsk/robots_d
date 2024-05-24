
const { request , response } = require("express");
const { robots } = require("../robots");

const getRobots = ( req = request , res = response )=> {
    return res.json({
        ok:true,
        statusCode:200,
        robots
    });
}

const getRobotById = ( req = request , res = response )=> {

    let id = req.params.id;

    let robotABuscar = "";

    robotABuscar = robots.find(( robot )=> {
        return robot.id === id;
    });

    if(robotABuscar){
        return res.json({
            ok:true,
            statusCode:200,
            robotABuscar
        });
    }else{
        return res.json({
            ok:false,
            statusCode:404,
            msg:"No hay un robot con ese id"
        });
    }
}

module.exports = {
    getRobots,
    getRobotById
}