Welcome to the contribution guide 👋

# For Beginners
Before going to contribution its important to get familiar with the code.

Take some time and go through the codebase.

# For contributors
This code should be in the proper shntax.

### Syntax
#### css
1. The `css` should be written with `media queries` at the end of the file. No media queries must exist at the middle of the code.
2. Any `hover` effects for a particular class should be written below the class definition.
3. `animation` will be defined below the first usage of animation from top to bottom.
4. The `css` code in the class should be in four sections.
```
1. Box definition
2. Width and Height adjustments
3. Other actions
4. colors and animation declaration.
```

For example,
```
. mainContainer {
    display:flex;
    position: absolute;
    
    width: 100vw;
    
    marign: 0;
    padding: 10px;
    
    background: black;
}
```
