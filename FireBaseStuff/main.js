var db = firebase.firestore()

// db.collection("data").doc("00001").set({ name: 'abhinav' });
// db.collection("data").doc("00002").set({ name: 'narayana' });
// db.collection("data").doc("00003").set({ name: 'balasubramaniam' });
// db.collection("data").doc("00004").set({ name: 'vishruth' });
// db.collection("data").doc("00005").set({ name: 'rajinikanth' });
// db.collection("data").doc("00006").set({ name: 'tharun' });
// db.collection("data").doc("00007").set({ name: 'sarvanan' });

userID = document.getElementById("userID");
display = document.getElementById("output"); 
nameDisplay = document.createElement('p');
submit = document.getElementById("submitButton").addEventListener( 'click',function() {
    if(userID.value!=''){
            var docRef = db.collection("data").doc(userID.value);

            docRef.get().then(function (doc) {

                if (doc.exists) {
                    nameDisplay.innerText = doc.data().name;
                    console.log(nameDisplay.innerText);
                    console.log(doc.data());
                    display.appendChild(nameDisplay);

                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            });
        console.log(userID.value)
        userID.value = '';
        }
})