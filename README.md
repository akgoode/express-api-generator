# Express API Generator!

### By Andrew Goode

## Overview

This builds off of the Express-API backend template that we use at GA for the
purpose of interacting with a mongoDB.

The /generate directory contains a scaffold script that allows a user to
generate a controller and a model based off a resource named \<resources\> where
the string is all lowercase and plural.  It also has the ability to handle
irregular nouns such as 'people' based on a list of exceptions.  Attempting
to use singular nouns or not sticking to this pattern in other ways could
have unexpected results!

### To Use

Simply run:

```node
node generate/scaffold.js <resources>
```
from the root directory where \<resources\> meets the pattern described above.

### Results

The script will create a controller located in your ./app/controllers directory
named \<resources\>.js and a model located in your ./app/models directory named
\<resource\>.js.

The controller that is generated will have all necessary dependencies configured
at the beginning of the file and will configure the before-action methods in
much the same way rails does.  The controller will also have all 5 CRUD
operations defined in a basic way that can easily be customized.

At the moment, the model generated will only have one attribute, a name that is
type String, and is required.  It will also have a generic virtual attribute
defined that is just the length of the name attribute.  Use these as templates
for adding your own attributes and virtuals and customizing it the way that
best suits your needs.
