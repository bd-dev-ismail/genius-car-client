export const setAuthToken = (user)=> {
    const currentUser = {
      email: user.email,
    };
    //get jwt
    fetch("https://genius-car-server-gamma.vercel.app/jwt", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //not best placce
        localStorage.setItem("genius-token", data.token);
        
      });
}