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

### Classes

* **top**:- This is a top bar that contains Title and menu button.
  * **main-nav**:- This is the top Main Title bar. This contains the main title **COVID-19**.
     * <a name="menu">**menu**</a>:- This component when clicked opens the [Side-Bar](#Sidebar) by calling [openNav()](#open) function.
* <a name="SideBar">**container**</a>:- This is the bar which contains a list of [elements](#element).
   * <a name="close">**close**</a> :- This component when clicked closes the [Sidebar](#SideBar) by calling [closeNav()](#close) function.
   * <a name="elements">**g1**</a>:- These are elements which have links to different sites.
* <a name="sroll_bar>**scroll_bar**</a>:- This it the top manu bar which gets activated when page is scrolled down uses
[scrollFunction()](#scroll) 



### Functions
| Name |Trigger |  Action Performed |
| -----------|---------- | ----------- |
| <a name="open"> openNav()</a>| click on [menu](#menu) | Opens the [Sidebar](#SideBar) |
| <a name="close"> closeNav()</a> | click on [close](#close) |Closes the [Sidebar](#SideBar)|
| <a name=""> scrollFunction()</a> | scroll the window down more than 50px|Activates the [scroll_bar](#sroll_bar)|
