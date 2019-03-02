# Project On My Way

A replacement for myDegreePath

## Features to include

-   Tools for completing your degree as fast as possible (or per whatever specification desired).
-   Intuitive UI for finding prerequisites easily.
-   The intelligence badges are hard... Find the least amount of courses to complete them while also keeping the courses you prefer (filter based on ENGR, CSE, so on and so forth).
-   Add double major requirements stuff.
-   When requirements are not met, give a detailed report as to what the problem is.

## Design choices to be wary about

-   Ensure that the program's tools don't get stuck putting a unwanted course into a requirement.
    -   Course A fulfills Requirement C an D.
    -   Course B fulfills Requirement C.
    -   Program says Course A fulfills Requirement C and that D is unfulfilled.
-   Ensure that the program is _fast_. One of the main problems with myDegreePath is that it takes forever.
-   Better way of organization "audits" and plans. Don't make them one different menus and such.
