'use client';

import React, { useState } from 'react';
import styles from './profile.module.css';
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export function ProfileContent({ mail, name}) {
  console.log(name);
  const [fname, setFName] = useState('John');
  const [lname, setLName] = useState('Doe');
  const [email, setEmail] = useState(mail);
  const [phone, setPhone] = useState('123-456-7890');
  const [isEditMode, setIsEditMode] = useState(false);

  const genders = ['Male', 'Female', 'Other'];
  const [selectedGender, setSelectedGender] = useState('Male');

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    // Perform saving logic here
    // For demonstration purposes, we will update the state values

    setFName(document.getElementById('fname-input').value);
    setLName(document.getElementById('lname-input').value);
    setEmail(document.getElementById('email-input').value);
    setPhone(document.getElementById('phone-input').value);

    setIsEditMode(false);
  };

  return (
    <div className={styles.container}>

      {/* Left partition code starts.. */}
      <div className={styles.left_partition}>
        <div className={styles.profile_greeting}>
          <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1684916745~exp=1684917345~hmac=f4aadea418753b5092d8c51e2af0bfe85c3666407217783a6a56eb67fa51231e" className={styles.profile_image} alt='image'></img>
          <div className={styles.greeting_message}>
            <h5>Hello,</h5>
            <h4>{fname}</h4>
          </div>
        </div>
        <div className={styles.other_options}>
          <div className={styles.other_option_conatainer}>
            <div className={styles.option_heading}><a href='www.google.com' className={styles.option_link}>MY ORDERS &gt;</a></div>
            <div className={styles.line}></div>
            <div className={styles.option_heading}>ACCOUNT SETTINGS</div>
            <div className={styles.outer_option_link}><a href='#' className={styles.option_link}>Profile Information</a></div>
            <div className={styles.outer_option_link}><a href='#' className={styles.option_link}>Manage Adresses</a></div>
            <div className={styles.line}></div>
            <div className={styles.option_heading}>PAYMENTS</div>
            <div className={styles.outer_option_link}><a href='#' className={styles.option_link}>Saved UPI</a></div>
            <div className={styles.outer_option_link}><a href='#' className={styles.option_link}>Saved Cards</a></div>
            <div className={styles.line}></div>
            <div className={styles.option_heading}>MY STUFF</div>
            <div className={styles.outer_option_link}><a href='#' className={styles.option_link}>My Reviews & Ratings</a></div>
            <div className={styles.outer_option_link}><a href='#' className={styles.option_link}>My Wishlist</a></div>

          </div>
        </div>
      </div>

      {/* Right Partition code starts.. */}
      <div className={styles.right_partition}>
        <div className={styles.profileInfo}>
          <div className={styles.field}>
            <div className={styles.profile_label}>Personal Insformation:</div>
            <div className={styles.profile_name}>
              {isEditMode ? (
                <input
                  id="fname-input"
                  type="text"
                  defaultValue={fname}
                  className={styles.profile_input}
                />
              ) : (
                <div className={styles.tinput}>{fname}</div>
              )}
              {isEditMode ? (
                <input
                  id="lname-input"
                  type="text"
                  defaultValue={lname}
                  className={styles.profile_input}
                />
              ) : (
                <div className={styles.tinput}>{lname}</div>
              )}
            </div>
          </div>
          <div className={styles.field}>
            <h5 className={styles.profile_label}>Gender Options:</h5>
            <ul className={styles.gender_container}>
              {genders.map((gender, index) => (
                <li key={index} className={styles.gender_items}>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value={gender}
                      className={styles.gender_bullet}
                      checked={selectedGender === gender}
                      onChange={handleGenderChange}
                    />
                    {gender}
                  </label>
                </li>
              ))}
            </ul>
            {/* {selectedGender && <p>Selected gender: {selectedGender}</p>} */}
          </div>
          <div className={styles.field}>
            <div className={styles.profile_label}>Email:</div>
            {isEditMode ? (
              <input
                id="email-input"
                type="email"
                defaultValue={email}
                className={styles.profile_input}
              />
            ) : (
              <div className={styles.tinput}>{email}</div>
            )}
          </div>
          <div className={styles.field}>
            <div className={styles.profile_label}>Phone:</div>
            {isEditMode ? (
              <input
                id="phone-input"
                type="tel"
                defaultValue={phone}
                className={styles.profile_input}
              />
            ) : (
              <div className={styles.tinput}>{phone}</div>
            )}
          </div>
        </div>
        <div className={styles.actions}>
          {isEditMode ? (
            <button onClick={handleSaveClick} className={styles.button}>
              Save
            </button>
          ) : (
            <button onClick={handleEditClick} className={styles.button}>
              Edit
            </button>
          )}
        </div>
        <img className={styles.bottom_image} src="https://th.bing.com/th/id/R.c0fb5d5bce7395a2b4649631239a3662?rik=AyZcJi5I9UoiaQ&riu=http%3a%2f%2fwww.new.jm-sys.com%2fbitrix%2ftemplates%2fjm-sys-en%2fimages%2fpage_bottom.png&ehk=EsAuaE9n7075heW2zhfmGQ0ywlT6Ap3%2fOEarSIN3B9s%3d&risl=&pid=ImgRaw&r=0"></img>
      </div>
    </div>
  );
}

export default function Profile() {

  const router = useRouter();
  const session = useSession();

  return(
    <div className={styles.mainWrappper}>
        <Navbar />

        {(session.status === "authenticated")?
            <ProfileContent mail={session.data.user.email} name={session.data.user} /> :
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100vw",height:"calc(100vh - 200px)"}}> You are not authenticated </div>
        }

        <Footer />
    </div>
  );
}