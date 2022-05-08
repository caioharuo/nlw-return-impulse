import nodemailer from 'nodemailer';

import { MailAdapter, SendMailData } from '../mail-adapter';

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    const transport = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'e81556d888ef4a',
        pass: '5e245c9c1ae57e',
      },
    });

    const feedback = await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Caio Hatai <caio.haruo@hotmail.com',
      subject,
      html: body,
    });
  }
}
