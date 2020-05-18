# Documentation

## Project Introduction
- Project Name:- COVID-19
- URL:-https://prince-7.github.io/prince-7-SGR-2-Covid-19/

This website is a comprehensive repository of the different information that a user would like to know about the current COVID-19 situation.

Three Main Components of Frontend:-
- HTML
- CSS
- JavaScript

## Design Specifications
- Color Codes:-
- Font :-
- Frontend Framework :- Manual

**Note:- Use Desktop For best experience**


## Project Contents and Details

### Classes and IDs

* **top**:- This is a top bar that contains Title and menu button.
  * **main-nav**:- This is the top Main Title bar. This contains the main title **COVID-19**.
     * <a name="menu">**menu**</a>:- This component when clicked opens the [Side-Bar](#Sidebar)(container) by calling [openNav()](#open) function.
* <a name="SideBar">**container**</a>:- This is the bar which contains a list of [elements](#element).
   * <a name="close">**close**</a> :- This component when clicked closes the [Sidebar](#SideBar)(container) by calling [closeNav()](#close) function.
   * <a name="elements">**g1**</a>:- These are elements which have links to different sites.
* <a name="sroll_bar">**scroll_bar**</a>:- This it the top manu bar which gets activated when page is scrolled down uses [scrollFunction()](#scroll) contains same [elements](#element) as [Sidebar](#SideBar)(container).

* **box**:- White box for design.
* **head-content** :- Contains text, stacked above white box.
* **banner**:- Forms the top portion of  website background.
* **steps**:- Contains list of expand elements.
   * **expand**:- This component opens up on hovering and shows the text inside.
* **contact**:- This component is at the right end on the website with fixed position. Contains 2 expand elements. Expands on hovering.
* **content**
  * **inst**:-Contains text.
  * **tracker**:-This is a button which responds on hovering.
  * **push**
    * <a name="country">**country**</a>:- This is a text input bar, the user is supposed to enter name of a country of which the user wants to see the data of. Uses [input](#input) variable in script.js file.
      * <a name="search">**search**</a>:- This is a button which searches the data of the country entered in text bar by using [show()](#show) function.
    




### Functions & Variables
| Name |Trigger |  Action Performed |
| -----------|---------- | ----------- |
| <a name="open"> openNav()</a>| click on [menu](#menu) | Opens the [Sidebar](#SideBar)(container) |
| <a name="close"> closeNav()</a> | click on [close](#close) |Closes the [Sidebar](#SideBar)(container)|
| <a name="scroll"> scrollFunction()</a> | scroll the window down more than 50px|Activates the [scroll_bar](#scroll_bar)|
|<a name="input">var input</a>| when "Enter" key is pressed| Triggers show() Function|
| <a name="show()">show()</a>| click on [search](#search) | Opens the [myDiv](#myDiv) Component.|
