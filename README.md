# Documentation

## Project Introduction
- Project Name:- COVID-19
- URL:-https://prince-7.github.io/prince-7-SGR-2-Covid-19/

This website is a comprehensive repository of the all different information that a user would like to know about the current COVID-19 situation.


**Note:- Use Desktop For best experience**


## Project Contents and Details
 * [Descriptions and usage Classes and IDs](#HTML)
 * [Design Specifications](#CSS)
 * [Functions & Variables](#JS)

### **<a name="HTML">Description and Usage of Classes and IDs</a>**

* <a name="top">**top**</a>:- This is a top bar that contains Title and menu button.
  * <a name="main">**main-nav**</a>:- This is the top Main Title bar. This contains the main title **COVID-19**.
     * <a name="menu">**menu**</a>:- This component when clicked opens the [Side-Bar](#Sidebar)(container) by calling [openNav()](#open) function.
* <a name="SideBar">**container**</a>(Side Bar):- This is the bar which contains a list of [elements](#element)(g1).
   * <a name="close">**close**</a> :- This component when clicked closes the [Sidebar](#SideBar)(container) by calling [closeNav()](#close) function.
   * <a name="elements">**g1**</a>:- These are elements which have links to different sites.
* <a name="scroll_bar">**scroll_bar**</a>:- This it the top manu bar which gets activated when page is scrolled down uses [scrollFunction()](#scroll) contains same [elements](#element) as [Sidebar](#SideBar)(container).

* <a name="box">**box**</a>:- White box for design.
* <a name="head-content">**head-content**</a> :- Contains text, stacked above white box.
* <a name="banner">**banner**</a>:- Forms the top portion of  website background.
* **steps**:- Contains list of expand elements.
   * <a name="expand">**expand**</a>:- This component opens up on hovering and shows the text inside.
* <a name="contact">**contact**</a>:- This component is at the right end on the website with fixed position. Contains 2 expand elements. Expands on hovering.
* <a name="content">**content**</a>
  * **inst**:-Contains text.
  * <a name="tracker">**tracker**</a>:-This is a button which responds on hovering.
  * **push**
    * <a name="country">**country**</a>:- This is a text input bar, the user is supposed to enter name of a country of which the user wants to see the data of. Uses [input](#input) variable in script.js file.
      * <a name="search">**search**</a>:- This is a button which searches the data of the country entered in text bar by using [show()](#show) function.
 * **<a name="myDiv">myDiv</a>**:- This is a hidden component which is shown when something is searched.
   * **<a name="up">up</a>**:- This is a button which triggers [hide()](#hide) function.
   * **<a name="data">data</a>**:- This is a container for an <a name="iframe">iframe</a>. This i frame shows the statistics of the country entered in input bar.
   
* **<a name="donate">donate</a>**:-this component contains text encouraging to donate and DONATE NOW [button](#tracker)(tracker).
* **<a name="resources">resources</a>**:- This component contains resorces such as links to important goverment sites and news
 * **<a name="res">res</a>**:- This is a button which contains the links.
 
 * **footer**:- Contains the name of the creator.



### **<a name="CSS">Design Specifications</a>**


|Color Codes| Component|
|-----------|-------|
| #D83F87 | body, [head-content](#head-content)|
| #2A1B3D | [main-nav](#main), [Sidebar](#SideBar)(container), footer, [scroll_bar](#scroll_bar)|
| #2A1B3D | [top](#top) |
| linear-gradient(to right, #44318D, #904E95)|[banner](#banner)|
| #FFFFFF | [box](#box)|
| #DC143C | [contact](#contact)|
| #A4B3B6 | [content](#content) |

- Images :- images folder in the repo.
- Font :- Helvetica
- Frontend Framework :- Manual


### **<a name="JS">Functions & Variables</a>**
| Name |Trigger |  Usage & Action Performed |
| -----------|---------- | ----------- |
| <a name="open"> openNav()</a>| click on [menu](#menu) | Opens the [Sidebar](#SideBar)(container) |
| <a name="close"> closeNav()</a> | click on [close](#close) |Closes the [Sidebar](#SideBar)(container)|
| <a name="scroll"> scrollFunction()</a> | scroll the window down more than 50px|Activates the [scroll_bar](#scroll_bar)|
|<a name="input">var input</a>| when "Enter" key is pressed| Triggers [show()](#show) Function|
| <a name="show">show()</a>| click on [search](#search) | Opens the [myDiv](#myDiv) Component and triggers [getData()](#get)|
| <a name="">getData()</a>|  called by show function | Takes the input entered in [country](#country) and sticks it in front of this [url](https://www.worldometers.info/coronavirus/country/) and changes the [iframe](#iframe) source link|
| <a name="hide">hide()</a>| click on [up](#up)| Hides [myDiv](#myDiv)|


## Main Features, Design Details and Effects:-
- The [Search](#country) section of the website shows the statistics of the country. It is made using [iframe](#iframe) tag.
- The buttons and options respond when cursor is hovered over them.
- The top [scroll-bar](#scroll-bar) comes up when the [SideBar](#SideBar) is not in frame.
- The [expand](#expand) element expands to show it's content when the user hovers over it.
- Some elements are skewed to give a good-design look to the website.
- Search bar expands on selecting.

## References
 The information used for making this side was taken from:
  - [WHO](https://www.who.int/health-topics/coronavirus#tab=tab_1)
  - [World Meters](https://www.worldometers.info/coronavirus/country/)
  - [Gov of India](https://www.mygov.in/covid-19/?cbps=1)
