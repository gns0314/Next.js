'use server';

export async function sendEmail() {
    /*
        await Mail.send( 'company@email.com', 'subject', 'content');
    */
   console.log( 'send email');
   return {
    from: 'from@email.com',
    to: 'to@email.com',
    subject: 'subject',
    content: 'content',
   }
}