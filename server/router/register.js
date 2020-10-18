const express = require('express')
const register = require('../model/register')
const router = express.Router()
const mailer = require('nodemailer')



router.post('/', async (req, res)=>{
    const user = await register.findOne({email: req.body.email})
    if (user){
        return res.send("User already exist")
    }else{
        await new register(req.body).save()

        // const testAccount = await mailer.createTestAccount();
        const testAccount = {user: "yuandaxu1994@gmail.com", pass: "Peter94213"}
        console.log("user-",testAccount.user)
        console.log("account--",testAccount.pass)

        const transporter = mailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                type: "OAuth2",
                serviceClient: "115989235934510057839",
                privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDkOebjkZeCaLcE\nxwThMAGw2/FNu/Hkzq86mtSbIJ2+C6Kv/Z5IuX6vFYVATxdnaja3xns6QH9MkuOj\npfXi/K05ECvARwvih8Zd1o0cEbksJNcUCQZKaKiDC/Q64hYTG13CAxO9KWtvu1PJ\nsbQcHf7eSwwLlU6z1o0H9m1lSgQ99T0mE+f6pJBUhyVRcF/pf4i5cfpq1aevkBN2\nanmLquJgoDq6cfdWXlyyGk/08B/WuNuktdG69JP+LNODYANGv1ADm54/KvM/DWP6\ne4OL25r12b49hkPGNkvLaiHM/dD3YgOs1MqxIS2jyoKDRh1g0CiHVqDChenLer93\nS/tIatOzAgMBAAECggEAG+sdXH9F6nUG1nXGGgn2Wv080oaIO7Yw51ljYqqlwUbJ\nGwBKaZkPbzmRuGE0erkagnasQl77c5GQeUdnAeJpCk75GydVw9taH8aMMn/UiBrl\nmJTWCSouWwGOWdmoW6QAXyhjNMOpWdyvjj/HyZy9vdGuYohcPVGkpPG3Rim8xRtM\nt30rp25hvkNmNi3vbbVBIvPNKRIMZvNbmYaeI/HwoU/30t5QV32ZYiho9WLwEYu5\ncKaGDzRCIIouJNiixz0b0fYPn5zvI6z34m2kPKiH+xtrZ0iteDv4hIyxaN4iT6tG\n0JNI6AR+fZW6NGdB+dh4LAD30vMvpX3Vs+iku7m94QKBgQD6ntUuSjZVZ7OXFfNu\nmH1+/QTy8SrS0T61/nwF5qVE+j+/oDVQ4dJeGuhf6OXaQf7Jxhz5UdPBt/ILUggw\na50GBlUa+4UqyNixpJWa+VwKGBkgleCpzN0+6zNVDVFrcy7GSFrIEgQN4ts1Hbzu\npbM9N4F12ELGPC6qkk4n1VdK8QKBgQDpIAMSUEghKs1YeNtg5hPMGbOgqGjH30Bk\nPedfmu3GbLZXkTYxdk4VA8VdW3Vr6oDQ4Cmy5ioSNXzDj84tGaki907UEB+MWJHC\nzMPAdLaIWhVY8kUL6STpu95ZXCfO/pv2OHBiHvUQnYPbfZDl4/Cg9W2mLQAHygFK\nUz39NHlg4wKBgQCk/LtK5gAu6T4JUKIZRLoZR2hipvGSJ74pAYeUOurCJhyhgk6X\nGJLs8LnZqfDnZlrdalbYq03EUdw+J5rMhYux06ljQgHA0MgW6kqy40X8PzELip+E\nKSHdsejxLPtUyVcZobhhzbptidLVfOZMFTmSK2BGvD/5UNVH5VkeUAxPgQKBgQCG\nyZ99AzXxF1JLCPWufNiNdX7KMRUEGyybyL7yJB2+UDTNRIRU7NYQiHGgnLSzhI6e\nNj1l1nYUuSA94fOPV/rW4K6PJhNXjg4Y11OG/vRaudsF5m3NiStyiNDyUboikEuU\nfOVdlhCTXr9SNLOGd9g0+DJBllsiJcXBN4fr0l8riQKBgHOQWO2Iao8xR3n1cR44\nl4rITkW1stUnAuMFpedqOnwjPZmuqu+7+sVdaEBiT1stw/0W6bso7xDaF0smYkb5\nAB91+FY+0NWUjEoJuzum29LjSGWFhoLtW6nM4VhU4y80eg5FYHZD86uZ+bhNBPIz\n8hug+CPY/zOGieqbXI4hV4fn\n-----END PRIVATE KEY-----\n"
            },
        })

        transporter.on('token', token => {
            console.log('A new access token was generated');
            console.log('User: %s', token.user);
            console.log('Access Token: %s', token.accessToken);
            console.log('Expires: %s', new Date(token.expires));
        });


        // transporter.set('oauth2_provision_cb', (user, renew, callback)=>{
            // let accessToken = userTokens[user];
            // console.log("user - ",user)
            // if(!accessToken){
            //     return callback(new Error('Unknown user'));
            // }else{
            //     return callback(null, accessToken);
            // }
        // });
        const info = await transporter.sendMail({
            from: 'yuandaxu1994@gmail.com',
            to: "xuy23@montclair.edu",
            subject: "Hello",
            text: "context",


        })
        // transporter.verify(function(error, success) {
        //     if (error) {
        //         console.log(error);
        //     } else {
        //         console.log("Server is ready to take our messages");
        //     }
        // });
        // console.log("info--", info)


        return res.send("register successfully")
    }
})

router.get('/user', async (req,res)=>{
    const list = await register.find()
    res.send(list)
})

router.get('/check', async (req, res)=>{
    const foundUser = await register.findOne({email: req.query.email})
    if (foundUser === null){
        return res.send('not found')
    } else {
        return res.send('user exist')
    }
})

module.exports = router
