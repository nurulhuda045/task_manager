const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'noorulhuda045@outlook.com',
        subject: 'Thanks for joining in!',
        Text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'noorulhuda045@outlook.com',
        subject: 'Sorry to see you go!',
        Text: `Goodbye ${name}, you have succesfully canceled your account.`
    })
}




module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
