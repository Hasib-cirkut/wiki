# How JS compiles things

Owner: Hasibul Huda

## Compilers:

A compiler works ahead of the time and creates a new file which has the machine code version of our code. C, C++, Java are compiled languages.

## Interpreter:

An interpreter reads and translates code line by line on the fly. It doesn’t have any compilation steps in between. Python, Ruby, JS are some example of interpreted language.

JS used to be an interpreted language. Meaning, it had no compilation steps. Making it very easy to use in browsers but for task that takes a lot of processing power it lagged behind. As Javascript runs on browser, the browser engines can do a lot more than just interpret. This is what a JIT(Just in time) compiler does. It’s the best of both worlds. 

How can it be both? Well, JS isn’t compiled well ahead of the time like C or Java. It’s compile as it is interpreted.  As the name suggest it, a JIT compiler compiles code into machine code just when we need it. The first JS JIT compiler was Mozilla’s TraceMonkey.