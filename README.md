# Intro
This Anki template contains a text field in which you can type in the correct answer.
It differs from the build in Anki note type, because it allows multi line answers to be typed in and checked for correctness.

# Acknowledgements

The main work is done by two scripts, without which I could not have created this template.

Comparing the typed answer with the solution is done by a slightly modified version of the diff part of [diff_match_patch.js](https://github.com/google/diff-match-patch/blob/master/javascript/diff_match_patch.js).
Huge thanks to [Neil Fraser](https://github.com/google/diff-match-patch/commits?author=NeilFraser) and the other [contributors](https://github.com/google/diff-match-patch/graphs/contributors) for making that script available.

The code highlighting is done by [highlight.js](https://highlightjs.org/) and an additional script written by [Arthur Milchior](https://www.milchior.fr/blog_en/).
I want to thank the contributors of [highlight.js](https://highlightjs.org/) for creating the script, and Arthur Milchior for writing the helper script and a [blog post](http://www.milchior.fr/blog_en/index.php/post/2022/03/22/Syntax-coloring-of-code-in-Anki), from which I first learned about the possibility of employing highlight.js in an Anki template.

The CSS style sheets for highlighting the code were originally created by [Jon Rohan](https://github.com/jonrohan) and are maintained by [Jan Pilzer](https://github.com/Hirse).

I also want to shout out [EmiliaClarkeGG](https://www.reddit.com/user/EmiliaClarkeGG/) who has already [posted](https://www.reddit.com/r/Anki/comments/15b11nq/solved_multiline_input_fields_in_Anki_without_an/) a template which lets you save your typed answer and display it on the Back of the Card. If you just want to save your typed answer, without comparing it to text in your card, his template seems more straight forward and potentially all you need.

# Concerns about violation of the _minimum information principle_
When multi line type checking has been requested and discussed in the past, some people have expressed the concern that it violates the "Minimum information principle".

In my opinion, the _minimum information principle_ serves as a great guideline, and should be followed for the majority of your flashcards. It optimizes memorization and retention of information, and it also makes grading your answers easy.

Like for most principles, I think there may be legitimate reasons which make it justifiable to not follow the "Minimum information principle" in certain circumstances.

My own primary use case for the template is to train myself to replicate constructs of programming languages which span multiple lines.

The built-in type checking in Anki, which supports checking the answer for a single line, is sufficient for a large percentage of programming language constructs. For example, you can prompt yourself to type in language keywords ("What is the keyword for an integer variable in the C?") or combinations of certain language constructs ("Declare and initialize a string variable in C!") or functions of the standard library ("Which function of the C standard library is used to copy the value of one string variable into another string variable?").

However, certain language constructs can be rather awkward to prompt for, when you can only ask about a single line. In addition, it can get difficult to prompt for these lines without also giving too many hints as to what the answer might be (this is also an issue with {{type:cloze:field}} cards).
Finally, I think there is a certain skill of "putting things together", which is not trained when asking about single lines of a multi line construct.

With that being said, I think multi line type checking flashcards have only a limited and auxiliary function. Learning about the language concepts by studying educational material and by creating your own projects should always be your first step ("understand before remembering"). And following that, creating and memorizing flashcards about the atomic parts of the programming language, as well as about the general concepts of computing, data structures and algorithms, math, etc. etc. should be the cornerstones for retaining your understanding.

I do think however, that multi line type checking flashcards can be used to train and/or remember language constructs which span a few lines. Because of this particular goal, it might also be worth thinking about employing a different repetition algorithm. For e.g. you might experiment with increasing the repetition steps in comparison to your regular flashcard. Because you are already memorizing the atomic parts of the programming language with different flashcards, repeating the multi line flashcards at the same rate might result in unnecessary duplication.
