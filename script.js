let code = document.getElementById('code');
let code2 = document.getElementById('code2');

code2.innerText = `*{
    font-family: cursive;
    transition: all .3s ease;
}

body{
    background: linear-gradient(445deg, red, blueviolet, blue);
    background-size: cover;
}

input{
    padding: .3vw;
    outline: none;
    border: none;
    background: none;
    border-bottom: 2px solid #000;
    margin: 1vw;
}

.heading{
    margin: 1vw;
    font-family: Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    color: red;
}

p{
    margin: 1vw;
}

form{
    background-color: white;
    border: 2px solid white;
    border-radius: 5px;
    width: 25%;
    padding-top: 2vw;
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    margin-top: 10vw;
}

textarea{
    margin: 1vw;
    padding: 0.5vw;
    border: none;
    outline: none;
    border: 2px solid black;
}`

code.innerText = `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contact-Us Template</title>
            <link rel="stylesheet" href="style.css">
            <link rel="shortcut icon" href="icon.ico">
        </head>
        <body>
            <form>
                <h2 class="heading">Contact Us</h2>
                <input type="name" id="name" placeholder="Enter Your Name">
                <input type="Email" id="Email" placeholder="Enter Your Email">
                <input type="Phone" id="Phone" placeholder="Enter Your Phone">
                <textarea name="text" id="text" cols="30" rows="7" placeholder="Write your concern"></textarea>
            </form>
        </body>
        </html>`