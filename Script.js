//Gainsight PX Tag
(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
      var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
      var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
      })
      (window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-5IWGNRKDCLOF-2");

//Tinesipo Login form
function validateForm() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var companyname = document.getElementById('companyname').value;

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
                "id": companyname, //Required
                "name": companyname,
                "Program": "Platinum" // flat custom attributes
                });
            window.location.href = 'Home.html';
            //document.getElementById('TinesipoLoginForm').submit();
        }
        };
    
