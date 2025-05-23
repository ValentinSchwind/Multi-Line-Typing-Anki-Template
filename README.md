# Intro
This Anki template offers two main features:
- A text field in which you can type in your answer. This differs from the build in Anki note type, because it allows multi line answers to be typed in and checked for correctness  
- Dynamic code highlighting of the sample answer.

# Demo
![demonstration](https://github.com/ValentinSchwind/Multi-Line-Typing-Anki-Template/assets/68036918/65841d34-831e-4282-8210-cab7d8e95d4d)

# Installation
## Using CrowdAnki
Install Anki add-on [CrowdAnki](https://github.com/Stvad/CrowdAnki):

1. Open Anki on your computer, go to the _Tools_ menu and select _Add-ons_.
2. In the dialog box, click on _Get Add-ons..._ and paste in the code provided on [this page](https://ankiweb.net/shared/info/1788670778).
3. Click on _OK_ to install the add-on, and then restart Anki.

You're now ready to install the template:

1. Go to the **[_Releases_ page](https://github.com/ValentinSchwind/Multi-Line-Typing-Anki-Template/releases)**.
2. In the latest release's _Assets_ section, download the ZIP archive.
3. Extract the content of the archive on your computer.
4. Open Anki and make sure your devices are all synchronised.
5. In the _File_ menu, select _CrowdAnki: Import from disk_.
6. Browse for and select the folder you extracted from the archive.
7. Don't change anything in the _CrowdAnki Import Settings_ dialog box that opens -- just press _OK_ to start the import. A dialog box should then confirm that the import was successful.

## Importing the .apkg
Alternatively, you can download the `.apkg` file with a sample deck from [here](https://ankiweb.net/shared/info/934037994).

# Usage
## Typing in the answer and comparing it
### Submitting your answer
Your answer will be saved automatically on every keystroke, including deletions.</p>
To exit the text field, press <kbd>Esc</kbd> or <kbd>Ctrl</kbd> (Anki Desktop) or click outside the text area.
To compare your answer with the suggested solution, press <kbd>Space</kbd> or click on Anki's <span class="stylized_button">Show Answer</span> button.

### Markup Meaning
<img src="https://github.com/user-attachments/assets/2b27a59c-da14-4c59-a979-7aa48d6a74ee" height="22px" /> Text marked like this was typed by you into the text field, and does appear in the suggested Solution.

<img src="https://github.com/user-attachments/assets/2f480195-cbb0-41a1-b8ce-a3104e1a31c6" height="22px" /> Text marked like this was <b>not</b> typed by you into the text field, but does appear in the suggested Solution.

<img src="https://github.com/user-attachments/assets/352e44b1-b03b-41a8-9611-2022be5c1e6a" height="22px" /> Text marked like this was typed by you into the text field, but does <b>not</b> appear in the suggested Solution.

## Configuration
Replacing the themes for code highlighting:
- Download a theme from the [main prism.js repository](https://github.com/PrismJS/prism/tree/v2/themes) or get a wider collection [here](https://github.com/PrismJS/prism-themes).
- Prepend the file name with an underscore ("`_`") to prevent Anki from auto-removing it when it checks for unused media files. 
- Place the downloaded file in your collections [file directory](https://docs.ankiweb.net/files.html#file-locations).
- Reference the file in the loading script.

# Acknowledgements
The main work is done by two libraries, without which I could not have created this template:

Comparing the typed answer with the solution is done by a slightly modified version of the diff part of [diff_match_patch.js](https://github.com/google/diff-match-patch/blob/master/javascript/diff_match_patch.js).
Huge thanks to [Neil Fraser](https://github.com/google/diff-match-patch/commits?author=NeilFraser) and the other [contributors](https://github.com/google/diff-match-patch/graphs/contributors) for making that script available.

The code highlight is currently done by [prism.js](https://prismjs.com/). Previously this template used [highlight.js](https://highlightjs.org/). This code is still available in a [separate branch](https://github.com/ValentinSchwind/Multi-Line-Typing-Anki-Template/tree/highlight-js-version). I want to thank the [contributors](https://github.com/PrismJS/prism/graphs/contributors), of [prism.js](https://prismjs.com/), as well as the [contributors](https://github.com/highlightjs/highlight.js/graphs/contributors) of [highlight.js](https://highlightjs.org/).

I also want to thank Arthur Milchior for writing a [blog post](http://www.milchior.fr/blog_en/index.php/post/2022/03/22/Syntax-coloring-of-code-in-Anki), from which I first learned about the possibility of using highlight.js in an Anki template.

The CSS style sheets for highlighting the code were created by [Jon Rohan](https://github.com/jonrohan) and are maintained by [Jan Pilzer](https://github.com/Hirse).

# Similar Projects
## Typing in the answer
I also want to mention the add-on [Multi-Line Type Answer Box - 2](https://ankiweb.net/shared/info/1018107736). If you only need this functionality on the desktop version of Anki, this add-on should well.

Furthermore, I want to mention [EmiliaClarkeGG](https://www.reddit.com/user/EmiliaClarkeGG/) who has already [posted](https://www.reddit.com/r/Anki/comments/15b11nq/solved_multiline_input_fields_in_Anki_without_an/) a template which lets you save your typed answer and display it on the back of the Card. If you just want to save your typed answer, without comparing it to text in your card, his template seems more straight forward and potentially all you need.

## Code Highlighting
[Syntax Highlighting (NG)](https://ankiweb.net/shared/info/566351439)
Addon for Anki Desktop. Creates Static code highlighting.
    
[Anki programming flashcards](https://github.com/badlydrawnrob/anki)
Script using pandoc to create static code highlighting from markdown files.

# Concerns about violation of the _minimum information principle_
When multi line type checking has been requested and discussed in the past, some people have expressed the concern that it violates the [_minimum information principle_](https://www.supermemo.com/en/blog/twenty-rules-of-formulating-knowledge).

In my opinion, the _minimum information principle_ serves as a great guideline, and should be followed for the majority of your flashcards. It optimizes memorization and retention of information, and it also makes grading your answers easy.

Like for most principles, I think there may be legitimate reasons which make it justifiable to not follow the "Minimum information principle" in certain circumstances.

My own primary use case for the template is to train myself to replicate constructs of programming languages which span multiple lines.

The built-in type checking in Anki, which supports checking the answer for a single line, is sufficient for a large percentage of programming language constructs. For example, you can prompt yourself to type in language keywords ("What is the keyword for an integer variable in the C?") or combinations of certain language constructs ("Declare and initialize a string variable in C!") or functions of the standard library ("Which function of the C standard library is used to copy the value of one string variable into another string variable?").

However, certain language constructs can be rather awkward to prompt for, when you can only ask about a single line. In addition, it can get difficult to prompt for these lines without also giving too many hints as to what the answer might be (this is also an issue with {{type:cloze:field}} cards).
Finally, I think there is a certain skill of "putting things together", which is not trained when asking about single lines of a multi line construct.

With that being said, I think multi line type checking flashcards have only a limited and auxiliary function. Learning about the language concepts by studying educational material and by creating your own projects should always be your first step ("understand before remembering"). And following that, creating and memorizing flashcards about the atomic parts of the programming language, as well as about the general concepts of computing, data structures and algorithms, math, etc. etc. should be the cornerstones for retaining your understanding.

I do think however, that multi line type checking flashcards can be used to train and/or remember language constructs which span a few lines. Because of this particular goal, it might also be worth thinking about employing a different repetition algorithm. For e.g. you might experiment with increasing the repetition steps in comparison to your regular flashcard. Because you are already memorizing the atomic parts of the programming language with different flashcards, repeating the multi line flashcards at the same rate might result in unnecessary duplication.
