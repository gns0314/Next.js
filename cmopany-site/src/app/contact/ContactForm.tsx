'use client';

import { sendEmail } from "./actions";

export function ContactForm(){
    const handleSubmit = async (event:any)=>{
        event.preventDefault();
        // sendEmail();
        // console.log('submit');
        const response = await sendEmail();
        console.log( response );
        alert('메일이 전송 되었습니다.')
        return false;
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <input type="text" className="border w-full p-2" placeholder="문의할 내용"/>
            </div>
            <div className="mb-4">
                <input type="email" className="border w-full p-2" placeholder="회신 받을 이메일"/>
            </div>
            <div>
                <button type="submit">전송</button>
            </div>
        </form>
    )
}