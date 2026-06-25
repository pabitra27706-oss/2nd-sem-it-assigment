const sampleAnswers = {
    1: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Question 1</title>
</head>
<body>
    <h1>John Doe</h1>
    <p>My favorite sport is cricket because it is exciting and builds teamwork.</p>
</body>
</html>`,

    2: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Question 2</title>
</head>
<body>
    <ul>
        <li>Clothes</li>
        <li>Toothbrush</li>
        <li>Phone Charger</li>
    </ul>
</body>
</html>`,

    3: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Question 3</title>
</head>
<body>
    <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ol>
</body>
</html>`,

    4: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Question 4</title>
</head>
<body>
    <b>This text is bold</b><br>
    <i>This text is italic</i><br>
    <u>This text is underlined</u>
</body>
</html>`,

    5: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Question 5</title>
</head>
<body>
    <form>
        <label for="fname">First Name:</label>
        <input type="text" id="fname" name="fname" placeholder="Enter first name">
        <button type="submit">Submit</button>
    </form>
</body>
</html>`,

    6: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Page</title>
</head>
<body>
    <p>This is the body of my HTML5 document.</p>
</body>
</html>`,

    7: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Question 7</title>
</head>
<body>
    <h1>This is Heading 1</h1>
    <h2>This is Heading 2</h2>
    <h3>This is Heading 3</h3>
    <h4>This is Heading 4</h4>
    <h5>This is Heading 5</h5>
    <h6>This is Heading 6</h6>
</body>
</html>`,

    8: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Question 8</title>
</head>
<body>
    <p>This is the first paragraph.<br>This is a new line inside the first paragraph.</p>
    <p>This is the second paragraph.</p>
</body>
</html>`,

    9: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Question 9</title>
</head>
<body>
    <p>This is the first paragraph above the line.</p>
    <hr>
    <p>This is the second paragraph below the line.</p>
</body>
</html>`,

    10: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Question 10</title>
</head>
<body>
    <p>Chemical formula of water: H<sub>2</sub>O</p>
    <p>Mathematical equation: X<sup>2</sup></p>
</body>
</html>`,

    11: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Question 11</title>
</head>
<body>
    <!-- This is a hidden note -->
    <p>The comment above is hidden and not visible on the page.</p>
</body>
</html>`,

    12: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Question 12</title>
</head>
<body>
    <ul>
        <li>First Item
            <ol>
                <li>A</li>
                <li>B</li>
            </ol>
        </li>
        <li>Second Item</li>
    </ul>
</body>
</html>`,

    13: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Question 13</title>
</head>
<body>
    <img src="picture.jpg" alt="This is a descriptive alternative text for the image">
</body>
</html>`,

    14: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Question 14</title>
</head>
<body>
    <form>
        <label for="pwd">Password:</label>
        <input type="password" id="pwd" name="pwd" placeholder="Enter your password">
    </form>
</body>
</html>`,

    15: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Question 15</title>
</head>
<body>
    <p>Select your favorite color:</p>
    <input type="radio" id="red" name="color" value="red">
    <label for="red">Red</label><br>
    <input type="radio" id="blue" name="color" value="blue">
    <label for="blue">Blue</label>
</body>
</html>`,

    16: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Question 16</title>
    <style>
        body {
            background-color: lightyellow;
        }
    </style>
</head>
<body>
    <p>The background color of this page is light yellow.</p>
</body>
</html>`,

    17: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Question 17</title>
    <style>
        p {
            color: blue;
        }
    </style>
</head>
<body>
    <p>This paragraph text color is blue using internal CSS.</p>
</body>
</html>`,

    18: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Question 18</title>
    <style>
        h1 {
            font-size: 20px;
            font-family: Arial;
        }
    </style>
</head>
<body>
    <h1>This heading uses Arial font at 20px size.</h1>
</body>
</html>`,

    19: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Question 19</title>
    <style>
        div {
            border: 2px solid black;
            padding: 10px;
            width: fit-content;
        }
    </style>
</head>
<body>
    <div>This text block has a solid black border of 2px.</div>
</body>
</html>`,

    20: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Question 20</title>
    <style>
        p {
            text-align: center;
        }
    </style>
</head>
<body>
    <p>This paragraph is center aligned using CSS text-align property.</p>
</body>
</html>`,

    21: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Question 21</title>
    <style>
        p {
            color: purple;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <p>This paragraph is styled using an internal CSS stylesheet inside the head tag.</p>
</body>
</html>`,

    22: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Question 22</title>
    <style>
        p {
            color: green;
        }
    </style>
</head>
<body>
    <p>This is the first paragraph in green.</p>
    <p>This is the second paragraph in green.</p>
    <p>This is the third paragraph in green.</p>
</body>
</html>`,

    23: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Question 23</title>
    <style>
        .highlight {
            background-color: yellow;
        }
    </style>
</head>
<body>
    <p class="highlight">This paragraph has a yellow background using the highlight class.</p>
    <p>This paragraph has no highlight class applied.</p>
</body>
</html>`,

    24: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Question 24</title>
    <style>
        #main-heading {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1 id="main-heading">This heading is bold using the ID selector main-heading.</h1>
</body>
</html>`,

    25: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Question 25</title>
    <style>
        h2 {
            color: #FF0000;
        }
    </style>
</head>
<body>
    <h2>This heading color is set to red using the hex code #FF0000.</h2>
</body>
</html>`,

    26: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Question 26</title>
    <style>
        .dark-container {
            background-color: darkblue;
            color: white;
            padding: 20px;
            width: fit-content;
        }
    </style>
</head>
<body>
    <div class="dark-container">
        This div has a dark blue background color applied exclusively to it.
    </div>
</body>
</html>`
};