//Gainsight PX Tag
(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
      var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
      var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
      })
      (window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-5IWGNRKDCLOF-2");

//Pendo Tag
(function(apiKey){
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
    v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
        o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
    
    pendo.initialize({
            visitor: {
                "id":username
            },
            account: {
                "id":"Pendo"
            }
        });
})('107c2b1f-2461-49e9-5042-5296daed144d');

//Tinesipo Login form
function validateForm() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Simple validation - Check if the fields are not empty
        if (username.trim() === '' || password.trim() === '') {
            alert('Username and password are required!');
        }
        else {

            //alert('Login successful!');//

//passing user and account objects:
                aptrinsic("identify",
                {
                //User Fields
                "id": username, // Required for logged in app users
                "email": username,
               // "firstName": "John",
               // "lastName": "Smith",
                "signUpDate": Date.now(), //unix time in ms
               // "plan" : "gold", //Custom attributes - please create those custom attributes in Aptrinsic via Account Settings to be tracked.
               // "price" : 95.5,
                //"userHash": "" // optional transient for HMAC identification
                },
                {
                //Account Fields
                "id":"PX TNSP", //Required
                "name":"Tinesipo",
                "Program": "Platinum" // flat custom attributes
                });
            window.location.href = 'Home.html';
            //document.getElementById('TinesipoLoginForm').submit();
        }
        };
    
