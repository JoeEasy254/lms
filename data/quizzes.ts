export const quizzes: {
    category: string;
    question: string;
    options: string[];
    correct_answer: number;
}[] = [
        {
            category: "HTML",
            question: "What does HTML stand for?",
            options: [
                "A) Hyperlinks and Text Markup Language",
                "B) Home Tool Markup Language",
                "C) Hyper Text Markup Language",
                "D) Hyper Tool Markup Language",
            ],
            correct_answer: 2,
        },
        {
            category: "HTML",
            question: "Which HTML element is used to define the title of a document?",
            options: ["A) <title>", "B) <meta>", "C) <head>", "D) <link>"],
            correct_answer: 0,
        },
        {
            category: "CSS",
            question: "Which property is used to change the background color in CSS?",
            options: [
                "A) bgcolor",
                "B) background-color",
                "C) color",
                "D) background",
            ],
            correct_answer: 1,
        },
        {
            category: "CSS",
            question:
                "How do you make each word in a text start with a capital letter using CSS?",
            options: [
                "A) text-transform: capitalize",
                "B) text-style: capitalize",
                "C) font-transform: capitalize",
                "D) transform: capitalize",
            ],
            correct_answer: 0,
        },
        {
            category: "JavaScript",
            question: "Which company developed JavaScript?",
            options: ["A) Microsoft", "B) Netscape", "C) Google", "D) Apple"],
            correct_answer: 1,
        },
        {
            category: "JavaScript",
            question:
                "Which of the following is a correct way to declare a JavaScript variable?",
            options: [
                "A) var myVar",
                "B) variable myVar",
                "C) v myVar",
                "D) myVar var",
            ],
            correct_answer: 0,
        },
        {
            category: "HTML",
            question: "Which HTML element is used to create a hyperlink?",
            options: ["A) <a>", "B) <link>", "C) <href>", "D) <nav>"],
            correct_answer: 0,
        },
        {
            category: "CSS",
            question: "How do you select an element with id 'header' in CSS?",
            options: ["A) .header", "B) #header", "C) header", "D) *header"],
            correct_answer: 1,
        },
        {
            category: "JavaScript",
            question: "Which method is used to write HTML output in JavaScript?",
            options: [
                "A) document.write()",
                "B) document.output()",
                "C) console.log()",
                "D) innerHTML",
            ],
            correct_answer: 0,
        },
        {
            category: "JavaScript",
            question:
                "What is the correct syntax for referring to an external script called 'app.js'?",
            options: [
                "A) <script name='app.js'>",
                "B) <script href='app.js'>",
                "C) <script src='app.js'>",
                "D) <script file='app.js'>",
            ],
            correct_answer: 0,
        },
        {
            "category": "HTML",
            "question": "What does HTML stand for?",
            "options": [
                "A) Hyperlinks and Text Markup Language",
                "B) Home Tool Markup Language",
                "C) Hyper Text Markup Language",
                "D) Hyper Tool Markup Language"
            ],
            "correct_answer": 2
        },
        {
            "category": "HTML",
            "question": "Which HTML tag is used to define an internal style sheet?",
            "options": [
                "A) <style>",
                "B) <CSS>",
                "C) <script>",
                "D) <link>"
            ],
            "correct_answer": 0
        },
        {
            "category": "HTML",
            "question": "Which HTML attribute is used to define inline styles?",
            "options": [
                "A) class",
                "B) font",
                "C) styles",
                "D) style"
            ],
            "correct_answer": 3
        },
        {
            "category": "HTML",
            "question": "Which is the correct HTML element for inserting a line break?",
            "options": [
                "A) <lb>",
                "B) <break>",
                "C) <br>",
                "D) <line>"
            ],
            "correct_answer": 2
        },
        {
            "category": "HTML",
            "question": "What is the correct HTML for creating a hyperlink?",
            "options": [
                "A) <a>http://www.example.com</a>",
                "B) <a href='http://www.example.com'>Example</a>",
                "C) <link>http://www.example.com</link>",
                "D) <a url='http://www.example.com'>Example</a>"
            ],
            "correct_answer": 1
        },
        {
            "category": "CSS",
            "question": "What does CSS stand for?",
            "options": [
                "A) Creative Style Sheets",
                "B) Cascading Style Sheets",
                "C) Computer Style Sheets",
                "D) Colorful Style Sheets"
            ],
            "correct_answer": 1
        },
        {
            "category": "CSS",
            "question": "Which HTML attribute is used to define inline styles?",
            "options": [
                "A) font",
                "B) class",
                "C) styles",
                "D) style"
            ],
            "correct_answer": 3
        },
        {
            "category": "CSS",
            "question": "Which is the correct CSS syntax?",
            "options": [
                "A) {body:color=black;}",
                "B) body {color: black;}",
                "C) {body;color:black;}",
                "D) body:color=black;"
            ],
            "correct_answer": 1
        },
        {
            "category": "CSS",
            "question": "How do you insert a comment in a CSS file?",
            "options": [
                "A) // this is a comment",
                "B) /* this is a comment */",
                "C) // this is a comment //",
                "D) ' this is a comment"
            ],
            "correct_answer": 1
        },
        {
            "category": "CSS",
            "question": "Which property is used to change the background color?",
            "options": [
                "A) bgcolor",
                "B) color",
                "C) background-color",
                "D) bg-color"
            ],
            "correct_answer": 2
        },
        {
            "category": "JavaScript",
            "question": "Inside which HTML element do we put the JavaScript?",
            "options": [
                "A) <js>",
                "B) <scripting>",
                "C) <script>",
                "D) <javascript>"
            ],
            "correct_answer": 2
        },
        {
            "category": "JavaScript",
            "question": "What is the correct syntax for referring to an external script called 'xxx.js'?",
            "options": [
                "A) <script href='xxx.js'>",
                "B) <script name='xxx.js'>",
                "C) <script src='xxx.js'>",
                "D) <script file='xxx.js'>"
            ],
            "correct_answer": 2
        },
        {
            "category": "JavaScript",
            "question": "How do you write 'Hello World' in an alert box?",
            "options": [
                "A) alertBox('Hello World');",
                "B) msgBox('Hello World');",
                "C) msg('Hello World');",
                "D) alert('Hello World');"
            ],
            "correct_answer": 3
        },
        {
            "category": "JavaScript",
            "question": "How do you create a function in JavaScript?",
            "options": [
                "A) function:myFunction()",
                "B) function myFunction()",
                "C) function = myFunction()",
                "D) function => myFunction()"
            ],
            "correct_answer": 1
        },
        {
            "category": "JavaScript",
            "question": "How do you call a function named 'myFunction'?",
            "options": [
                "A) call myFunction()",
                "B) call function myFunction()",
                "C) myFunction()",
                "D) Call.myFunction()"
            ],
            "correct_answer": 2
        },
        {
            "category": "Python",
            "question": "What is the correct file extension for Python files?",
            "options": [
                "A) .pt",
                "B) .pyt",
                "C) .pyth",
                "D) .py"
            ],
            "correct_answer": 3
        },
        {
            "category": "Python",
            "question": "Which keyword is used to create a function in Python?",
            "options": [
                "A) function",
                "B) def",
                "C) func",
                "D) define"
            ],
            "correct_answer": 1
        },
        {
            "category": "Python",
            "question": "How do you insert COMMENTS in Python code?",
            "options": [
                "A) //This is a comment",
                "B) /*This is a comment*/",
                "C) #This is a comment",
                "D) <!--This is a comment-->"
            ],
            "correct_answer": 2
        },
        {
            "category": "Python",
            "question": "Which one is NOT a legal variable name in Python?",
            "options": [
                "A) my-var",
                "B) my_var",
                "C) _myvar",
                "D) myvar"
            ],
            "correct_answer": 0
        },
        {
            "category": "Python",
            "question": "How do you create a variable with the numeric value 5?",
            "options": [
                "A) x = int(5)",
                "B) x = 5",
                "C) Both A and B are correct",
                "D) None of the above"
            ],
            "correct_answer": 2
        },
        {
            "category": "HTML",
            "question": "Which HTML element is used to specify a footer for a document or section?",
            "options": [
                "A) <bottom>",
                "B) <footer>",
                "C) <section>",
                "D) <foot>"
            ],
            "correct_answer": 1
        },
        {
            "category": "HTML",
            "question": "What is the correct HTML element for playing video files?",
            "options": [
                "A) <movie>",
                "B) <video>",
                "C) <media>",
                "D) <play>"
            ],
            "correct_answer": 1
        },
        {
            "category": "HTML",
            "question": "Which element is used in HTML5 to define navigation links?",
            "options": [
                "A) <nav>",
                "B) <navigate>",
                "C) <navigation>",
                "D) <navigator>"
            ],
            "correct_answer": 0
        },
        {
            "category": "HTML",
            "question": "Which HTML element is used to specify a header for a document or section?",
            "options": [
                "A) <head>",
                "B) <header>",
                "C) <top>",
                "D) <section>"
            ],
            "correct_answer": 1
        },
        {
            "category": "HTML",
            "question": "Which attribute is used to specify a unique identifier for an HTML element?",
            "options": [
                "A) class",
                "B) id",
                "C) key",
                "D) name"
            ],
            "correct_answer": 1
        },
        {
            "category": "CSS",
            "question": "Which CSS property is used to change the text color of an element?",
            "options": [
                "A) fgcolor",
                "B) text-color",
                "C) color",
                "D) font-color"
            ],
            "correct_answer": 2
        },
        {
            "category": "CSS",
            "question": "Which CSS property controls the text size?",
            "options": [
                "A) font-style",
                "B) text-size",
                "C) font-size",
                "D) text-style"
            ],
            "correct_answer": 2
        },
        {
            "category": "CSS",
            "question": "What is the correct CSS syntax to make all <p> elements bold?",
            "options": [
                "A) <p style='text-size:bold;'>",
                "B) p {font-weight:bold;}",
                "C) p {text-size:bold;}",
                "D) <p style='font-size:bold;'>"
            ],
            "correct_answer": 1
        },
        {
            "category": "CSS",
            "question": "How do you display hyperlinks without an underline?",
            "options": [
                "A) a {text-decoration:none;}",
                "B) a {decoration:no-underline;}",
                "C) a {underline:none;}",
                "D) a {text-decoration:no-underline;}"
            ],
            "correct_answer": 0
        },
        {
            "category": "CSS",
            "question": "Which property is used to change the font of an element?",
            "options": [
                "A) font-family",
                "B) font-style",
                "C) font-weight",
                "D) font-size"
            ],
            "correct_answer": 0
        },
        {
            "category": "CSS",
            "question": "How do you make each word in a text start with a capital letter?",
            "options": [
                "A) text-transform:capitalize",
                "B) text-transform:uppercase",
                "C) text-transform:lowercase",
                "D) text-transform:initial"
            ],
            "correct_answer": 0
        },
        {
            "category": "JavaScript",
            "question": "How do you write an IF statement in JavaScript?",
            "options": [
                "A) if i == 5 then",
                "B) if (i == 5)",
                "C) if i = 5",
                "D) if i = 5 then"
            ],
            "correct_answer": 1
        },
        {
            "category": "JavaScript",
            "question": "How do you write an IF statement for executing some code if 'i' is NOT equal to 5?",
            "options": [
                "A) if (i != 5)",
                "B) if i <> 5",
                "C) if (i <> 5)",
                "D) if i =! 5 then"
            ],
            "correct_answer": 0
        },
        {
            "category": "JavaScript",
            "question": "How does a WHILE loop start?",
            "options": [
                "A) while (i <= 10; i++)",
                "B) while (i <= 10)",
                "C) while i = 1 to 10",
                "D) while (i++ <= 10)"
            ],
            "correct_answer": 1
        },
        {
            "category": "JavaScript",
            "question": "How does a FOR loop start?",
            "options": [
                "A) for i = 1 to 5",
                "B) for (i = 0; i <= 5)",
                "C) for (i = 0; i <= 5; i++)",
                "D) for (i <= 5; i++)"
            ],
            "correct_answer": 2
        },
        {
            "category": "JavaScript",
            "question": "How can you add a comment in JavaScript?",
            "options": [
                "A) 'This is a comment",
                "B) <!--This is a comment-->",
                "C) // This is a comment",
                "D) # This is a comment"
            ],
            "correct_answer": 2
        },
        {
            "category": "Python",
            "question": "Which operator is used to multiply numbers in Python?",
            "options": [
                "A) x",
                "B) X",
                "C) *",
                "D) %"
            ],
            "correct_answer": 2
        },
        {
            "category": "Python",
            "question": "Which of the following is a valid Python list?",
            "options": [
                "A) [1, 2, 3]",
                "B) (1, 2, 3)",
                "C) {1, 2, 3}",
                "D) <1, 2, 3>"
            ],
            "correct_answer": 0
        },
        {
            "category": "Python",
            "question": "How do you start writing a for loop in Python?",
            "options": [
                "A) for i = 1 to 10:",
                "B) for i in range(10):",
                "C) for (i = 0; i < 10; i++):",
                "D) for each i in range(10):"
            ],
            "correct_answer": 1
        },
        {
            "category": "Python",
            "question": "Which method can be used to remove any whitespace from both the beginning and the end of a string?",
            "options": [
                "A) ptrim()",
                "B) strip()",
                "C) len()",
                "D) trim()"
            ],
            "correct_answer": 1
        },
        {
            "category": "Python",
            "question": "Which method can be used to return a string in upper case letters?",
            "options": [
                "A) upper()",
                "B) uppercase()",
                "C) upcase()",
                "D) upper_case()"
            ],
            "correct_answer": 0
        },
        {
            "category": "HTML",
            "question": "What is the correct HTML for adding a background color?",
            "options": [
                "A) <body bg='yellow'>",
                "B) <body style='background-color:yellow;'>",
                "C) <background>yellow</background>",
                "D) <body background='yellow'>"
            ],
            "correct_answer": 1
        },
        {
            "category": "HTML",
            "question": "Choose the correct HTML element to define emphasized text.",
            "options": [
                "A) <i>",
                "B) <italic>",
                "C) <em>",
                "D) <b>"
            ],
            "correct_answer": 2
        },
        {
            "category": "HTML",
            "question": "What is the correct HTML for creating a checkbox?",
            "options": [
                "A) <input type='checkbox'>",
                "B) <input type='check'>",
                "C) <checkbox>",
                "D) <check>"
            ],
            "correct_answer": 0
        },
        {
            "category": "HTML",
            "question": "What is the correct HTML for creating a drop-down list?",
            "options": [
                "A) <input type='list'>",
                "B) <list>",
                "C) <select>",
                "D) <dropdown>"
            ],
            "correct_answer": 2
        },
        {
            "category": "HTML",
            "question": "Which HTML element defines the title of a document?",
            "options": [
                "A) <title>",
                "B) <meta>",
                "C) <head>",
                "D) <header>"
            ],
            "correct_answer": 0
        },
        {
            "category": "CSS",
            "question": "Which property is used to change the left margin of an element?",
            "options": [
                "A) padding-left",
                "B) margin-left",
                "C) indent",
                "D) spacing-left"
            ],
            "correct_answer": 1
        },
        {
            "category": "CSS",
            "question": "How do you make the text bold?",
            "options": [
                "A) font-weight:bold;",
                "B) font:bold;",
                "C) style:bold;",
                "D) text:bold;"
            ],
            "correct_answer": 0
        },
        {
            "category": "CSS",
            "question": "Which property is used to change the font size of an element?",
            "options": [
                "A) text-size",
                "B) font-size",
                "C) text-style",
                "D) font-style"
            ],
            "correct_answer": 1
        },
        {
            "category": "CSS",
            "question": "How do you display a border like this: The top border = 10 pixels, the bottom border = 5 pixels, the left border = 20 pixels, and the right border = 1pixel?",
            "options": [
                "A) border-width:10px 1px 5px 20px;",
                "B) border-width:10px 20px 5px 1px;",
                "C) border-width:10px 5px 20px 1px;",
                "D) border-width:10px 1px 20px 5px;"
            ],
            "correct_answer": 0
        },
        {
            "category": "CSS",
            "question": "Which property is used to change the cursor to a hand icon?",
            "options": [
                "A) mouse-pointer",
                "B) cursor",
                "C) pointer",
                "D) hand"
            ],
            "correct_answer": 1
        },
        {
            "category": "CSS",
            "question": "Which CSS property is used to change the text color of an element?",
            "options": [
                "A) fgcolor",
                "B) text-color",
                "C) color",
                "D) font-color"
            ],
            "correct_answer": 2
        },
        {
            "category": "JavaScript",
            "question": "Which event occurs when the user clicks on an HTML element?",
            "options": [
                "A) onmouseover",
                "B) onmouseclick",
                "C) onclick",
                "D) onchange"
            ],
            "correct_answer": 2
        },
        {
            "category": "JavaScript",
            "question": "How do you declare a JavaScript variable?",
            "options": [
                "A) var carName;",
                "B) variable carName;",
                "C) v carName;",
                "D) def carName;"
            ],
            "correct_answer": 0
        },
        {
            "category": "JavaScript",
            "question": "Which operator is used to assign a value to a variable?",
            "options": [
                "A) *",
                "B) -",
                "C) =",
                "D) x"
            ],
            "correct_answer": 2
        },
        {
            "category": "JavaScript",
            "question": "What will the following code return: Boolean(10 > 9)",
            "options": [
                "A) false",
                "B) true",
                "C) NaN",
                "D) null"
            ],
            "correct_answer": 1
        },
        {
            "category": "JavaScript",
            "question": "Which of the following is a JavaScript framework?",
            "options": [
                "A) React",
                "B) Laravel",
                "C) Django",
                "D) Rails"
            ],
            "correct_answer": 0
        },
        {
            "category": "Python",
            "question": "How do you create a dictionary in Python?",
            "options": [
                "A) my_dict = {'name': 'John', 'age': 25}",
                "B) my_dict = ['name': 'John', 'age': 25]",
                "C) my_dict = ('name': 'John', 'age': 25)",
                "D) my_dict = <'name': 'John', 'age': 25>"
            ],
            "correct_answer": 0
        },
        {
            "category": "Python",
            "question": "Which keyword is used to create a class in Python?",
            "options": [
                "A) myClass",
                "B) class",
                "C) define",
                "D) create"
            ],
            "correct_answer": 1
        },
        {
            "category": "Python",
            "question": "How do you start a comment in Python?",
            "options": [
                "A) //",
                "B) <!--",
                "C) #",
                "D) '"
            ],
            "correct_answer": 2
        },
        {
            "category": "Python",
            "question": "What is the correct way to create a function in Python?",
            "options": [
                "A) function myFunction():",
                "B) def myFunction():",
                "C) create myFunction():",
                "D) function:myFunction()"
            ],
            "correct_answer": 1
        },
        {
            "category": "Python",
            "question": "Which of the following is a Python data type?",
            "options": [
                "A) string",
                "B) number",
                "C) array",
                "D) char"
            ],
            "correct_answer": 0
        },
        {
            "category": "HTML",
            "question": "Which attribute specifies a unique identifier for an element?",
            "options": [
                "A) id",
                "B) class",
                "C) key",
                "D) identity"
            ],
            "correct_answer": 0
        },
        {
            "category": "HTML",
            "question": "How can you open a link in a new tab/browser window?",
            "options": [
                "A) <a href='url' new>",
                "B) <a href='url' target='_blank'>",
                "C) <a href='url' target='new'>",
                "D) <a href='url' target='new_tab'>"
            ],
            "correct_answer": 1
        },
        {
            "category": "HTML",
            "question": "What is the correct HTML for adding a background color?",
            "options": [
                "A) <background>yellow</background>",
                "B) <body bg='yellow'>",
                "C) <body style='background-color:yellow;'>",
                "D) <body style='bg-color:yellow;'>"
            ],
            "correct_answer": 2
        },
        {
            "category": "HTML",
            "question": "Which HTML element is used to specify a footer for a document or section?",
            "options": [
                "A) <bottom>",
                "B) <section>",
                "C) <footer>",
                "D) <foot>"
            ],
            "correct_answer": 2
        },
        {
            "category": "HTML",
            "question": "Which HTML attribute is used to define inline styles?",
            "options": [
                "A) font",
                "B) class",
                "C) styles",
                "D) style"
            ],
            "correct_answer": 3
        },
        {
            "category": "CSS",
            "question": "Which CSS property controls the text size?",
            "options": [
                "A) font-size",
                "B) text-size",
                "C) text-style",
                "D) font-style"
            ],
            "correct_answer": 0
        },
        {
            "category": "CSS",
            "question": "What is the correct CSS syntax to make all <p> elements bold?",
            "options": [
                "A) <p style='text-size:bold;'>",
                "B) p {font-weight:bold;}",
                "C) p {text-size:bold;}",
                "D) <p style='font-size:bold;'>"
            ],
            "correct_answer": 1
        },
        {
            "category": "CSS",
            "question": "How do you display hyperlinks without an underline?",
            "options": [
                "A) a {text-decoration:none;}",
                "B) a {decoration:no-underline;}",
                "C) a {underline:none;}",
                "D) a {text-decoration:no-underline;}"
            ],
            "correct_answer": 0
        },
        {
            "category": "CSS",
            "question": "Which property is used to change the font of an element?",
            "options": [
                "A) font-family",
                "B) font-style",
                "C) font-weight",
                "D) font-size"
            ],
            "correct_answer": 0
        },
        {
            "category": "CSS",
            "question": "How do you make each word in a text start with a capital letter?",
            "options": [
                "A) text-transform:capitalize",
                "B) text-transform:uppercase",
                "C) text-transform:lowercase",
                "D) text-transform:initial"
            ],
            "correct_answer": 0
        },
        {
            "category": "JavaScript",
            "question": "How do you write an IF statement in JavaScript?",
            "options": [
                "A) if i == 5 then",
                "B) if (i == 5)",
                "C) if i = 5",
                "D) if i = 5 then"
            ],
            "correct_answer": 1
        },
        {
            "category": "JavaScript",
            "question": "How do you write an IF statement for executing some code if 'i' is NOT equal to 5?",
            "options": [
                "A) if (i != 5)",
                "B) if i <> 5",
                "C) if (i <> 5)",
                "D) if i =! 5 then"
            ],
            "correct_answer": 0
        },
        {
            "category": "JavaScript",
            "question": "How does a WHILE loop start?",
            "options": [
                "A) while (i <= 10; i++)",
                "B) while (i <= 10)",
                "C) while i = 1 to 10",
                "D) while (i++ <= 10)"
            ],
            "correct_answer": 1
        },
        {
            "category": "Python",
            "question": "What is the correct file extension for Python files?",
            "options": [
                "A) .python",
                "B) .pyth",
                "C) .py",
                "D) .pt"
            ],
            "correct_answer": 2
        },
        {
            "category": "Python",
            "question": "Which of the following is the correct syntax to output 'Hello World' in Python?",
            "options": [
                "A) echo 'Hello World'",
                "B) printf('Hello World')",
                "C) print('Hello World')",
                "D) console.log('Hello World')"
            ],
            "correct_answer": 2
        },
        {
            "category": "Python",
            "question": "How do you insert comments in Python code?",
            "options": [
                "A) // This is a comment",
                "B) # This is a comment",
                "C) /* This is a comment */",
                "D) <!-- This is a comment -->"
            ],
            "correct_answer": 1
        },
        {
            "category": "Python",
            "question": "Which method can be used to remove any whitespace from both the beginning and the end of a string?",
            "options": [
                "A) ptrim()",
                "B) strip()",
                "C) len()",
                "D) trim()"
            ],
            "correct_answer": 1
        },
        {
            "category": "Python",
            "question": "How do you create a variable with the numeric value 5?",
            "options": [
                "A) x = 5",
                "B) x == 5",
                "C) x := 5",
                "D) int x = 5"
            ],
            "correct_answer": 0
        },
        {
            "category": "Python",
            "question": "How do you create a function in Python?",
            "options": [
                "A) function myFunction()",
                "B) def myFunction()",
                "C) create myFunction()",
                "D) function: myFunction()"
            ],
            "correct_answer": 1
        },
        {
            "category": "JavaScript",
            "question": "Inside which HTML element do we put the JavaScript?",
            "options": [
                "A) <js>",
                "B) <javascript>",
                "C) <script>",
                "D) <code>"
            ],
            "correct_answer": 2
        },
        {
            "category": "JavaScript",
            "question": "What is the correct syntax for referring to an external script called 'xxx.js'?",
            "options": [
                "A) <script href='xxx.js'>",
                "B) <script name='xxx.js'>",
                "C) <script src='xxx.js'>",
                "D) <script file='xxx.js'>"
            ],
            "correct_answer": 2
        },
        {
            "category": "JavaScript",
            "question": "How do you write 'Hello World' in an alert box?",
            "options": [
                "A) msgBox('Hello World');",
                "B) alertBox('Hello World');",
                "C) msg('Hello World');",
                "D) alert('Hello World');"
            ],
            "correct_answer": 3
        },
        {
            "category": "JavaScript",
            "question": "How do you create a function in JavaScript?",
            "options": [
                "A) function = myFunction()",
                "B) function myFunction()",
                "C) function:myFunction()",
                "D) create myFunction()"
            ],
            "correct_answer": 1
        },
        {
            "category": "JavaScript",
            "question": "How do you call a function named 'myFunction'?",
            "options": [
                "A) call myFunction()",
                "B) call function myFunction()",
                "C) myFunction()",
                "D) Call.myFunction()"
            ],
            "correct_answer": 2
        },
        {
            "category": "JavaScript",
            "question": "How to write an IF statement in JavaScript?",
            "options": [
                "A) if i = 5 then",
                "B) if i == 5 then",
                "C) if (i == 5)",
                "D) if i = 5"
            ],
            "correct_answer": 2
        },
        {
            "category": "JavaScript",
            "question": "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
            "options": [
                "A) if (i <> 5)",
                "B) if i <> 5",
                "C) if (i != 5)",
                "D) if i =! 5 then"
            ],
            "correct_answer": 2
        },
        {
            "category": "JavaScript",
            "question": "How does a WHILE loop start?",
            "options": [
                "A) while (i <= 10; i++)",
                "B) while (i <= 10)",
                "C) while i = 1 to 10",
                "D) while (i++ <= 10)"
            ],
            "correct_answer": 1
        },
        {
            "category": "JavaScript",
            "question": "How does a FOR loop start?",
            "options": [
                "A) for i = 1 to 5",
                "B) for (i = 0; i <= 5)",
                "C) for (i = 0; i <= 5; i++)",
                "D) for (i <= 5; i++)"
            ],
            "correct_answer": 2
        },
        {
            "category": "JavaScript",
            "question": "How can you add a comment in JavaScript?",
            "options": [
                "A) 'This is a comment",
                "B) <!--This is a comment-->",
                "C) // This is a comment",
                "D) # This is a comment"
            ],
            "correct_answer": 2
        },
        {
            "category": "JavaScript",
            "question": "What is the correct way to write a JavaScript array?",
            "options": [
                "A) var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
                "B) var colors = 'red', 'green', 'blue'",
                "C) var colors = (1:'red', 2:'green', 3:'blue')",
                "D) var colors = ['red', 'green', 'blue']"
            ],
            "correct_answer": 3
        },
        {
            "category": "JavaScript",
            "question": "How do you round the number 7.25 to the nearest integer?",
            "options": [
                "A) Math.round(7.25)",
                "B) round(7.25)",
                "C) rnd(7.25)",
                "D) Math.rnd(7.25)"
            ],
            "correct_answer": 0
        },
        {
            "category": "JavaScript",
            "question": "How do you find the number with the highest value of x and y?",
            "options": [
                "A) Math.ceil(x, y)",
                "B) Math.max(x, y)",
                "C) ceil(x, y)",
                "D) top(x, y)"
            ],
            "correct_answer": 1
        },
        {
            "category": "JavaScript",
            "question": "What is the correct JavaScript syntax for opening a new window called 'w2'?",
            "options": [
                "A) w2 = window.new('http://www.w3schools.com');",
                "B) w2 = window.open('http://www.w3schools.com');",
                "C) w2 = window.create('http://www.w3schools.com');",
                "D) w2 = open.window('http://www.w3schools.com');"
            ],
            "correct_answer": 1
        },
        {
            "category": "JavaScript",
            "question": "How do you write 'Hello World' in an alert box?",
            "options": [
                "A) msgBox('Hello World');",
                "B) alertBox('Hello World');",
                "C) msg('Hello World');",
                "D) alert('Hello World');"
            ],
            "correct_answer": 3
        }  
    ];