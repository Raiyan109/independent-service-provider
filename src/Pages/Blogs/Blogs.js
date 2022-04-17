import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1>Difference between authorization and authentication </h1>
            <p> authentication is the activity of proving who someone is, and authorization is the activity of proving what specific applications, files, and data a user has access to.</p>

            <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
            <p>The Firebase Realtime Database lets you build well-to-do, collective applications beside allowing secure access to the database, direct from client-side code. This is why I use Firebase. </p>
            <p>There are some other options to implement authentication, for example - Okta, WatchGuard AuthPoint, LastPass for Business, Cisco Secure Access by Duo, HID DigitalPersona (formerly Crossmatch), Azure Active Directory etc. </p>

            <h1>What other services does firebase provide other than authentication</h1>
            <p>Cloud Firestore,Cloud Functions,Hosting,Cloud Storage,Google Analytics, Predictions,Cloud Messaging.



            </p>
        </div>
    );
};

export default Blogs;