# Nov_task

# KHub_Practice Task 3: ICC MEN'S CRICKET WORLD CUP

## Table of Contents
- Introduction
- Problem Statement
- Technologies used
- Modules Used
- Required Installations
- Project flow
- Components
- Conclusion

## Introduction:
  
Step into the heart of cricketing history with our tribute to the ICC Men's Cricket World Cup held in 2011. Celebrating the exhilarating journey of triumph and passion, this React-powered website magnificently encapsulates the epic tournament where India emerged victorious, captivating enthusiasts with iconic moments like Dhoni's historic six at Wankhede Stadium. Crafted meticulously using React components, this amazing website invites you to explore the glory of India's second World Cup win, providing an immersive and dynamic experience. Relive the heroics of legends like Tendulkar and Dhoni, and delve into the behind-the-scenes magic that rendered this event an indelible chapter in cricket history. Immerse yourself in an interactive journey that brings the splendor of cricket's pinnacle event alive on your screen, all powered by the versatility and agility of React technology.

## Problem Statement:

Task is to create your own webpage by using the React components below:

1. Navbar
2. Sidebar
3. Search bar
4. Cards with any kind of information related to your webpage, one image and some content need to be on every card (Minimum of 4)
5. Piecharts, which represents any kind of information related to your webpage (Minimum of 4) 
6. Table with minimum of 5 columns and 4 rows
7. Form [Date and Day selection, Dropdown, Check boxes (min of 3), Radio buttons (min of 2), Text boxes (min of 2), Button]
8. Footer (content related to the webpage you chose)
You should be able to create app pages that show smooth responsive behavior that adapts to screen size as well as device type.The webpage theme and design are your choice.

## Technologies used:

### React.js :  
React.js simplifies UI development through its component-based architecture, enhancing code reusability and performance optimizations for dynamic web interfaces. Its virtual DOM efficiently updates the actual DOM, leading to faster rendering and improved user experience.

### Install Node.js
If you haven't already installed Node.js, download and install it from the [official Node.js website](https://nodejs.org/). This will also install npm, the package manager for Node.js.

### Create a new React app
Open your terminal or command prompt and use the `npx` command to create a new React app. Run the following command:
```
npx create-react-app client
```

## Modules Used:

### React
The core library for building UI components in JavaScript.

### react-router-dom
- **Route**: A React component that renders some UI when its path matches the current URL.
- **Routes**: A component that declares the different routes within the application and renders matching routes.

### react-icons (specifically `FaBars`, `FaTh`, `FaClone`, `FaSitemap`, `FaTable`, `FaFileAlt`)
Icon components from React Icons library, used to display various icons in the sidebar menu.

### react-router-dom (specifically `NavLink`, `BrowserRouter`)
- **NavLink**: Component used to create navigation links within the application, allowing for active link styling.
- **BrowserRouter**: Provides the functionality for routing in the React application, enabling the use of declarative routing.

### useState
A React hook used for managing component-level state in functional components.

### react-chartjs-2
React wrapper for Chart.js library to create charts in React applications.

### chart.js/auto
Latest version of Chart.js library to provide functionalities for creating various charts.

### useRef
A React hook used to create a mutable ref object to persist values across renders without causing re-renders.

### react-icons (specifically `FaBars`, `FaTimes`)
Icon components from React Icons library, used to display icons for navigation purposes in the Navbar component.


## Installations Required:

*To run the code, ensure you have installed the following npm packages:*

- Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

To run the component, you'll need to install the following npm packages:

```
npm install react          # Installs the core library for building UI components in JavaScript.

npm install react-icons    # Installs icon components from React Icons library for displaying various icons.

npm install react-chartjs-2 chart.js@latest   # Installs React wrapper for Chart.js library to create charts in React applications along with the latest Chart.js version.

npm install react-router-dom   # Installs the necessary routing functionalities in the React application.
```

## Project Flow

The first step involves creating a folder named *client*. Within the *client* directory, three subfolders were created: *assets*, *components*, and *pages*. The folder structure is as depicted below:

![Folder Structure](https://github.com/Madhurithotakua/Nov_task/assets/104493027/87d400af-f7bc-4a84-9197-1eb370e89305)

For the frontend, React.js was employed:

1. Navigate to the *client* folder and access the terminal using ```Ctrl + Shift + ` ``` in VS Code or open a new terminal.
2. Type `cd client` to navigate to the folder, then execute ```npm install```. This command installs necessary files and node modules.
3. Initiate the frontend by using the command ```npm start```.

Upon execution, the webpage depicted below should be displayed, allowing selection or navigation to the Dashboard, Cards, Charts, Table, and Form.

![Webpage Preview](https://github.com/Madhurithotakua/Nov_task/assets/104493027/c1171f36-e8e8-487e-8111-9b83a377098e)

Leveraging React.js, the frontend seamlessly integrates a dynamic Navbar, Sidebar, Search bar, visually engaging Cards presenting essential information with images, interactive Piecharts, a structured Table showcasing data, a comprehensive Form providing diverse inputs, and a Footer enriched with content relevant to the webpage. This amalgamation delivers a highly functional and immersive user experience.


## Components:

### Navbar

The Navbar component encapsulates critical navigation links:
- ICC Men's Cricket World Cup
- ICC Fan Hub
- ICC Insights
- ICC Score Tracker
- ICC Live Scoreboard
- All About Cricket

### Sidebar

The Sidebar component features a collapsible menu for rapid access to distinct application sections. It includes:
- Icon-based menu items for Dashboard, Cards, PieCharts, Table, and Form.
- Utilization of React Router's NavLink for seamless routing between different views.
- Integration of a toggle functionality to expand or collapse the sidebar, optimizing user space management.

### Searchbar

A user-friendly component facilitating effortless interaction with the search functionality by providing an easily accessible input field.

### Footer

The Footer component comprises:
- A cricket-themed logo and copyright text.
- Representation of the 2023 ICC Men's Cricket World Cup.
- Promotion of the website as the premier cricket destination, delivering a captivating conclusion to the webpage.

### Dashboard

The Dashboard component centers around the 2011 ICC Men's Cricket World Cup, showcasing significant elements:
- Multiple sections highlighting pivotal moments, India's victory, memorable experiences, and insights into cricket equipment.
- Descriptive paragraphs and accompanying images for comprehensive elucidation.
- Inclusion of a Wikipedia link for further exploration and linked logos directing to external sites (e.g., Google, Instagram).

![Dashboard](https://github.com/Madhurithotakua/Nov_task/assets/104493027/a76a9bd5-7320-4f7c-a124-493f773da3d4)

### Cards

The Cards component presents a prominent main card featuring the ICC Men's World Cup 2011 victory. It includes:
- Sub-cards detailing historical triumphs, iconic moments, player contributions, behind-the-scenes insights, technological advancements, and memorable cricket events.
- Hyperlinks directing to relevant external sources for an engaging portrayal of cricket history.

![Cards](https://github.com/Madhurithotakua/Nov_task/assets/104493027/48220e85-d345-42f7-b6f6-0a215ac9eef1)

### PieCharts

The PieCharts component, driven by React and Chart.js, showcases:
- Chart.js-rendered pie charts illustrating statistical player data during the 2011 World Cup.
- Individualized charts for players sourced from the worldCup2011Winners array.

![PieCharts](https://github.com/Madhurithotakua/Nov_task/assets/104493027/42555ca5-d067-40cd-80b0-91240f630cb8)

### Table

The Table component, constructed using React, offers:
- An extensive table displaying statistical insights of players from the 2011 ICC Men's Cricket World Cup.
- Organized details encompassing player names, roles, batting/bowling styles, runs scored, and wickets taken.
- Utilization of the worldCup2011Winners dataset for dynamically populating player statistics.

![Table](https://github.com/Madhurithotakua/Nov_task/assets/104493027/182ad8df-1689-4fd0-94da-0e174478a88a)

### Form

The Form component empowers users to share their cricket passion through:
- An intuitive form capturing user preferences such as dates, favorite cricketers, skills, match preferences, and memorable moments.
- Diverse input elements like checkboxes, radio buttons, and text areas, fostering rich user interactions related to cricket.

![Form](https://github.com/Madhurithotakua/Nov_task/assets/104493027/329b3cad-965b-474e-81dc-cdcafaf82801)


## Conclusion: 

The ICC Men's Cricket World Cup 2011 project developed using React.js embodies a seamless blend of informative content and user-friendly design, ensuring optimal functionality and responsiveness. This web application showcases a diverse range of features, including detailed insights into India's victorious journey, captivating imagery, interactive data visualization through charts, a comprehensive tabulated representation of players' statistics, and an engaging form to capture users' cricketing preferences. The project's responsive layout effortlessly adapts across various devices, offering a consistent and enjoyable experience to cricket enthusiasts. Its intuitive interface and well-structured components contribute to a captivating digital exploration of the historic tournament, making it an enriching experience for all users.

*Senior Developer* - K.Keerthi   *Junior Devloper* - T.Madhuri

<p align="center">
  <img src="https://github.com/Madhurithotakua/Nov_task/assets/104493027/35e7bd7f-450c-48c9-8dc9-e0f1c031e675" alt="Image" />
</p>






