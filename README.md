# Express API Generator!

### By Andrew Goode

## Overview

This builds off of the Express-API backend template that we use at GA for the
purpose of interacting with a mongoDB.  The goal is to mimic the rails scaffold
command that creates a template of a controller and model.

The /generate directory contains a scaffold script that allows a user to
generate a controller and a model based off a resource named \<resources\> where
the string is all lowercase and plural.  It also has the ability to handle
irregular nouns such as 'people' based on a list of exceptions.  Attempting
to use singular nouns or not sticking to this pattern in other ways could
have unexpected results!

### To Use

#### Simple

```node
node generate/scaffold.js <resources>
```
from the root directory where \<resources\> meets the pattern described above.

#### Attributes

```node
node generate/scaffold.js <resources> attr1:Type attr2:Type attr3:Type
```

### Results

The script will create a controller located in your ./app/controllers directory
named \<resources\>.js and a model located in your ./app/models directory named
\<resource\>.js.

The controller that is generated will have all necessary dependencies configured
at the beginning of the file and will configure the before-action methods in
much the same way rails does.  The controller will also have all 5 CRUD
operations defined in a basic way that can easily be customized.

If the first command is run, the model will contain a sample attribute called
"name" with a type String.  If the second command is run with custom attributes
the model will replace the default attribute with all of the listed ones.  the
model sets all attributes to be required by default.
