const mongoose = require('mongoose');
const cliente = require('../db/monbodb');
const {regexName, regexEmail} = require('../utils/regex')
const nodemailer = require('nodemailer');
const { Code } = require('mongodb');
require('dotenv').config()

const addClientes = async(req, res)=>{
    const newClient = new cliente(req.body);
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
    console.log(newClient)
    try{
        if(regexName(newClient.name) == true){
            if(regexEmail(newClient.email) == true){
                try{
                    await newClient.save()
                    
                    res.send(newClient)
                }catch(err){res.send(err)}  
                transporter.sendMail(mailOptions, function(error, info){
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
    
}

module.exports =  {addClientes}