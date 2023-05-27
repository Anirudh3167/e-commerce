"use client"

import React from 'react'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import Styles from './page.module.css'


export default async function Page() {
    // Getting the data from the backend    
    let query = await fetch("http://localhost:3000/api/faq",{method:"GET"});
    const response = await query.json();
    let questions = response['records'];

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    function showans(elem) {
        let id = 'ans-' + elem;
        console.log(id);
        return ;
    }
  return (
    <div className={Styles.mainWrapper}>
        <Navbar />

        <div className={Styles.mainContainer}>
            {/* FAQ questions */}
            <div className={Styles.leftContainer}>
                <div className={Styles.searchBar}>
                    <input type="text" placeholder='search your question' />
                    <button> Search </button>
                </div>
                <div className={Styles.questions}>
                {
                    questions.map((ques) => (
                    <div className={Styles.question} key={ques.id}>
                        <div className={Styles.ques}>
                        {ques.question} &nbsp; &nbsp; 
                        <div className={Styles.showans} onClick={() => showans(ques.id)}> 🔻 </div>
                        </div>
                        <div className={Styles.ans} id={`ans-${ques.id}`}>{ques.ans}</div>
                    </div>
                    ))
                }
                </div>
            </div>

            {/* Contact Form */}
            <form action='/' className={Styles.rightContainer} onSubmit={handleSubmit}>
                <input type="text" placeholder='Name' name='Name' />
                <input type="text" placeholder='Email' name='Email' />
                <textarea name="Complaint" id="complaint" placeholder='Your Query' />
                <button type='submit'> Send </button>
            </form>
        </div>

        <Footer />
    </div>
  )
}
