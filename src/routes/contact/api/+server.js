import { json } from '@sveltejs/kit';
import { z } from 'zod'

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const body = await request.json();

    const registerContactSchema = z.object({
        inquiry_title: z.string().min(5).trim(),
        email: z.string().email(),
        inquiry_details: z.string().min(5).trim()
    })
    

    try {
        const result = registerContactSchema.parse(body)

        return json({message: "success"}, {status: 201});

    } catch (error) {

        return json({message: error}, {status: 401});
    }


}