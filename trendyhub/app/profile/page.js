import React from 'react';
import styles from './profile.module.css';

export default function Profile() {
  const name = 'John Doe';
  const email = 'johndoe@example.com';
  const phone = '123-456-7890';
  let isEditMode = false;

  const handleEditClick = () => {
    isEditMode = true;
    forceUpdate();
  };

  const handleSaveClick = () => {
    isEditMode = false;
    forceUpdate();
    // Perform saving logic here
  };

  const forceUpdate = () => {
    // Dummy function to force re-render
    const [, setTick] = React.useState(0);
    React.useEffect(() => {
      setTick((tick) => tick + 1);
    }, []);
  };

  return (
<div className={styles.container}>
      <div className={styles.leftPartition}></div>
      <div className={styles.rightPartition}>
        <div className={styles.profileInfo}>
          <div className={styles.field}>
            <label className={styles.profile_label}>Name:</label>
            {isEditMode ? (
              <input className={styles.profile_input} type="text" defaultValue={name} />
            ) : (
              <span className={styles.tinput}>{name}</span>
            )}
          </div>
          <div className={styles.field}>
            <label className={styles.profile_label}>Email:</label>
            {isEditMode ? (
              <input className={styles.profile_input} type="email" defaultValue={email} />
            ) : (
              <span className={styles.tinput}>{email}</span>
            )}
          </div>
          <div className={styles.field}>
            <label className={styles.profile_label}>Phone:</label>
            {isEditMode ? (
              <input className={styles.profile_input} type="tel" defaultValue={phone} />
            ) : (
              <span className={styles.tinput}>{phone}</span>
            )}
          </div>
        </div>
        <div className={styles.actions}>
          {isEditMode ? (
            <button onClick={handleSaveClick}>Save</button>
          ) : (
            <button onClick={handleEditClick}>Edit</button>
          )}
        </div>
      </div>
    </div>
  );
}