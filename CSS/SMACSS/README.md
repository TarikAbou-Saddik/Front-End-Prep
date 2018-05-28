# Learning Scalable and Modular Architecture for CSS (SMACSS)

(Note: the following is taken from the excellent SMACSS e-book that is available for [free online](https://smacss.com/book/categorizing).

## Categorizing CSS Rules

#### There are five types of categories:

1. Base
2. Layout
3. Module
4. State
5. Theme

* **Base** rules are the defaults. They are almost exclusively single element selectors but it could include attribute selectors, pseudo-class selectors, child selectors or sibling selectors.

* **Layout** rules divide the pages into sections. Layouts hold one or more modules together. 

* **Modules** are the reusable, modular parts of our design. They are the callouts, the sidebar sections, the product lists and so on. 

* **State rules** are ways to describe how our modules or layouts will look when in a particular state. Is it hidden or expanded? Is it active or inactive? They are about describing how a module or layout looks on screens that are smaller or bigger. They are also about describing how a module might look in different views like the home page or the inside page.

* Finally, **Theme rules** are similar to state rules in that they describe how modules or layouts might look. Most sites don't require a layer of theming but it is good to be aware of it. 

### Naming Rules

* "I like to use a prefix to differentiate between Layout, State, and Module rules. For Layout, I use l- but layout- would work just as well. Using prefixes like grid- also provide enough clarity to separate layout styles from other styles. For State rules, I like is- as in is-hidden or is-collapsed. This helps describe things in a very readable way.

* Modules are going to be the bulk of any project. As a result, having every module start with a prefix like .module- would be needlessly verbose. Modules just use the name of the module itself."



