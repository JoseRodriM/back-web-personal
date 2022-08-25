const mongoose = require('mongoose');
const cliente = require('../db/monbodb');
const {regexName, regexEmail} = require('../utils/regex')
const nodemailer = require('nodemailer');
require('dotenv').config()

const addClientes = async(req, res)=>{
    const newClient = new cliente(req.body);
    console.log(req.body)
    try{
        if(regexName(newClient.name) == true){
            if(regexEmail(newClient.email) == true){
                await newClient.save()
                transporter.sendMail(mailOptions, function(error, info){
                    if(error){
                        console.log(error);
                    }else{
                        console.log('Email enviado: ' + info.response)
                    }
                })
                transporter.sendMail(mailHost, function(error, info){
                    if(error){
                        console.log(error);
                    }else{
                        console.log('Email enviado: ' + info.response)
                    }
                })
            }else{
                console.log('El Email no es válido')
            }
        }else{
            console.log('El nombre no es válido')
        }
    }catch(err){
        console.log(err)
    }
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    });
    
    let mailOptions={
        from:'process.env.GMAIL_USER',
        to:`${newClient.email}`,
        subject: 'Email de confirmación',
        text : `Hola ${newClient.name}, gracias por escribirnos, te confirmamos que nos ha llegado tu solicitud y será respondida en la brevedad posible, muchas gracias y buen día!!!`
    }

    let mailHost={
        from:'process.env.GMAIL_USER',
        to:'process.env.GMAIL_HOST',
        subject: 'Solicitud informacion',
        text : `${newClient.name}, ${newClient.email}, ${newClient.message}`
    }


}

module.exports =  {addClientes}