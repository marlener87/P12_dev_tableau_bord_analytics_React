// import React from 'react';


// const apiBar = () => {

//     fetch(`http://localhost:3000/user/12/activity`)
//       .then(response => response.json())
//       .then(responseData => {
//         setData(responseData.data.sessions);
//       })
//       .catch(error => {
//         console.log(error);
//       });


//       fetch(`http://localhost:3000/user/12/activity`)
//       .then(response => response.json())
//       .then(responseData => {
//         setData(responseData.data.sessions);
//       })
//       .catch(error => {
//         console.log(error);
//       });



//       fetch(`http://localhost:3000/user/12/activity`)
//       .then(response => response.json())
//       .then(responseData => {
//         setData(responseData.data.sessions);
//       })
//       .catch(error => {
//         console.log(error);
//       });

// };

// export default apiBar;

// api.js

// API pour la partie Apport.js, radial.js
export const fetchUserData = async (userId) => {
  try {
      const response = await fetch(`http://localhost:3000/user/${userId}`);
      if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données utilisateur.');
      }
      const data = await response.json();
      return data.data;
  } catch (error) {
      console.error(error);
      throw error;
  }
};

// API pour la partie bar.js
export const fetchUserActivity = async (userId) => {
  try {
    console.log(userId)
      const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
      if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données d\'activité.');
      }
      const data = await response.json();      
      return data.data.sessions;
  } catch (error) {
      console.error(error);
      throw error;
  }
};


// API pour la partie line.js
export const fetchUserSession = async (userId) => {
  try {
    const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données de sessions');
    }
    const data = await response.json();
    console.log(data);
    
    return data.data.sessions;
  } catch (error) {
    console.log('Erreur lors de la récupération des sessions moyennes:', error);
    throw error;
  }
};

// API pour la partie radar.js
export const fetchUserRadar = async (userId) => {
  try {
    const response = await fetch(`http://localhost:3000/user/${userId}/performance`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données de performance');
    }
    const data = await response.json();
    console.log(data);
    
    return data.data.sessions;
  } catch (error) {
    console.log('Erreur lors de la récupération des performances:', error);
    throw error;
  }
}