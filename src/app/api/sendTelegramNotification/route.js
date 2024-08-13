// app/api/sendTelegramNotification/route.js

import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { title, slug } = await request.json();

        const botToken = '7429366317:AAG-bBFwJcEby0pZ-eyoZv2TPgXmdqEWSLY';
        const chatId = '745813851';
        const message = `New article published: ${title}\nRead more: ${process.env.NEXT_PUBLIC_API_URL}/articles/${slug}`;

        const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const response = await fetch(telegramUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to send message to Telegram');
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
        return NextResponse.error();
    }
}
