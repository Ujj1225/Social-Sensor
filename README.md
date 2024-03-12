# Social Sensor

# <p align="center"><img src="https://github.com/Ujj1225/Social-Sensor/blob/main/Client%20/src/assets/images/Analysis%20Logo.png" width=300 /></p>

<p align="center">
    <p align="center">
        <a href="https://github.com/Ujj1225/Social-Sensor" target="blank">
            <img src="https://img.shields.io/github/watchers/Ujj1225/Social-Sensor?style=for-the-badge&logo=appveyor" alt="Watchers"/>
        </a>
        <a href="https://github.com/Ujj1225/Social-Sensor/fork" target="blank">
            <img src="https://img.shields.io/github/forks/Ujj1225/Social-Sensor?style=for-the-badge&logo=appveyor" alt="Forks"/>
        </a>
        <a href="https://github.com/Ujj1225/Social-Sensor/stargazers" target="blank">
            <img src="https://img.shields.io/github/stars/Ujj1225/Social-Sensor?style=for-the-badge&logo=appveyor" alt="Star"/>
        </a>
    </p>
    <p align="center">
        <a href="https://github.com/Ujj1225/Social-Sensor/issues" target="blank">
            <img src="https://img.shields.io/github/issues/Ujj1225/Social-Sensor?style=for-the-badge&logo=appveyor" alt="Issue"/>
        </a>
        <a href="https://github.com/Ujj1225/Social-Sensor/pulls" target="blank">
            <img src="https://img.shields.io/github/issues-pr/Ujj1225/Social-Sensor?style=for-the-badge&logo=appveyor" alt="Open Pull Request"/>
        </a>
    </p>
    <p align="center">
        <a href="https://github.com/Ujj1225/Social-Sensor/blob/master/LICENSE" target="blank">
            <img src="https://img.shields.io/github/license/Ujj1225/Social-Sensor?style=for-the-badge&logo=appveyor" alt="License" />
        </a>
    </p>
</p>

<p align="center">
</p>

## Problem Statement

# <p align="center"><img src="https://github.com/Ujj1225/from_Taipy-walletWISE/blob/main/assets/problem.png" width=750 height=425 /></p>

## Solutions

# <p align="center"><img src="https://github.com/Ujj1225/from_Taipy-walletWISE/blob/main/assets/walletWISE_solutions.png" width=750 height=425 /></p>

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [License](#license)

## Features

- Income and Expense Tracker

  User can enter their Income, Expense along with the sector as headings. This allows them to comprehend and explore how much they are earning from which sector and how much they are spending on which sector.
  <details>
    <summary> UI of Tracker </summary>
    <img src="https://github.com/Ujj1225/from_Taipy-walletWISE/blob/main/assets/UI_tracker.png" width=750/>
  </details>

- Insight Box

  Here, User's income and expense are analyzed, mathematically shown and 7 tips for making better, wiser financial decisions are displayed.
  <details>
    <summary> Insight box before getting insights!</summary>
    <img src="https://github.com/Ujj1225/from_Taipy-walletWISE/blob/main/assets/insight_box.png" width=750/>

    <summary> Insight box after getting insights!</summary>
    <img src="https://github.com/Ujj1225/from_Taipy-walletWISE/blob/main/assets/after_insight.png" width=750/>
  </details>

- Realtime Visualization

  Implemented a visualizer where you can see the different headings from which you earnt money and the different headings on which you spent it.
  <details>
    <summary> Visualization </summary>
    <img src="https://github.com/Ujj1225/from_Taipy-walletWISE/blob/main/assets/visualizer.png" width=750/>
  </details>

## Demo

https://github.com/SusheelThapa/from_taipy_census/assets/83917129/025733fe-d963-4ed1-8de5-5a514a4a6070

## Installation

### Prerequisites

Before running Social Sensor, you must set it up by following the given setup procedure. You must set up the Frontend, Backend and Model separately. In case of a query, feel free to contact the contributors.

### Setup

#### Follow the given steps to set up walletWISE

1. Clone the repository:

   ```bash
   git clone https://github.com/Ujj1225/Social-Sensor.git
   ```

2. Installation of required packages

### Frontend
   ```bash
cd Client
npm install
   ```
### Backend 
```bash
cd Backend
npm install
   ```
### Model 
```bash
cd LSTM_model
pip install -r requirements.txt
   ```

3. Setting up .env file for Backend

- Create a .env file

  ```bash
  PORT = (You can use any but default is: 3000)
  CONNECTION_STRING = mongodb+srv://ujj1225:12345@news.qeoe8li.mongodb.net/
  ```

4. Running the project:

- Frontend and Backend file must be run together.

#### Frontend
- Navigate to Client then:

```bash
  npm run dev
```

#### Backend
- Navigate to Backend then:

```bash
  node app.js
```

# You are all set to use the application!


## Dependencies

### Frontend

- For frontend can be found in [package.json](./Client%20/package.json)

### Backend

- For backend can be found in [package.json](./Backend/package.json)

### Model

- Dependencies concerning model are mentioned in [requirements.txt](./LSTM_model/requirement.txt)

## License

This project is licensed under the [MIT License](/LICENSE).
