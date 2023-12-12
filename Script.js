<script>
        function validateForm() {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            // Simple validation - Check if the fields are not empty
            if (username.trim() === '' || password.trim() === '') {
                alert('Username and password are required!');
            } else {
                // You can add additional validation or submit the form here
                alert('Login successful!');
                window.location.href = 'Page2.html';
                // document.getElementById('loginForm').submit(); // Uncomment to submit the form
            }
        }
</script>