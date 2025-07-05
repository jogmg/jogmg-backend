import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

interface ISendMail {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}

@Injectable()
export class MailerService {
  private readonly transporter: nodemailer.Transporter;

  constructor(private readonly configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'joattah3@gmail.com',
        pass: this.configService.get<string>('SMTP_PASSWORD'),
      },
    });
  }

  async sendMail({ from, to, subject, text, html }: ISendMail) {
    const info = await this.transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
    });

    return info;
  }
}
