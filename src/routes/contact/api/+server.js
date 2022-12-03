import { json } from '@sveltejs/kit';
import { z } from 'zod'
import { Client } from '@notionhq/client'
import {NOTION_TOKEN, NOTION_DB_ID, MAILGUN_API_KEY} from '$env/static/private'
import nodemailer from 'nodemailer'
import mg from 'nodemailer-mailgun-transport'

// Initializing notion client
const notion = new Client({
    auth: NOTION_TOKEN,
  })

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const body = await request.json();

    const registerContactSchema = z.object({
        inquiry_title: z.string().min(5).trim(),
        email: z.string().email(),
        inquiry_details: z.string().min(5).trim()
    })
    

    try {
        const {inquiry_title, email, inquiry_details} = registerContactSchema.parse(body)


        await notion.pages.create({ 
            parent: {
                database_id: NOTION_DB_ID
            },

            properties: {
                "title": {
                    title: [
                        {
                            type: "text",
                            text: {
                                content: inquiry_title
                            }
                        }
                    ]
                },
                "_a%60Q": {
                    rich_text: [
                        {
                            type: "text",
                            text: {
                                content: inquiry_details
                            }
                        }
                    ]
                },
                "s%40%5Cj": {
                    email: email
                }
            }
        
        })

        const mgAuth = {
            auth: {
              api_key: MAILGUN_API_KEY,
              domain: 'sandboxb6a9976edd324827b80ffbc78f690920.mailgun.org'
            }
          }

        const nodemailerMailgun  = nodemailer.createTransport(mg(mgAuth))

        const msg = {
            to: 'dixiekun.pacheco@gmail.com',
            from: 'dixiekun.pacheco@gmail.com', 
            subject: inquiry_title,
            html: `${inquiry_details} <br/>${email}`,
            'replyTo': email
          }

          nodemailerMailgun.sendMail(msg, function(error) {
            if (error) {
                console.log(error);
              } else {
                console.log('Email sent');
              }
        })


        return json({message: "success"}, {status: 201});

    } catch (error) {

        return json({message: error}, {status: 401});
    }


}