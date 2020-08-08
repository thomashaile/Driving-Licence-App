# Driving Licence App: Development Strategy

Building this app one step at a time.

## 0. Setup

- Filled-out [planning document](https://cloud.openknowledge.be/s/Zq54xpbkNxE5aZc) 
- Define first communication plan.
- Set up the starter project.
  - Identify the main repository owner.
  - Add each other as collaborators.
  - Set up the project board.
- Fork the [organized-for-deployment](https://github.com/HackYourFutureBelgium/organized-for-deployment).
- Make a search about app and think on the samples.
- Define user stories.
- Write a first-draft development strategy.
- Deploy the starter code.
- Update `readme.md`
- Begin planning the data tables for the application.
- Update existing files according to requirements.
- Create issues, assign issues, create milestones and labels.
- Begin wireframing

## 1. User Story: Home Page - Overview

A user can overview a sample tutorial, and can see overview of the page
\*\*\* This user story can be divided into pieces as Header, Main Section Footer or Contact page, About page...
labels: `init`, `view`, `style`, `frontend`

**FRONTEND**

- Create `init.js` to declare home page for initialization.
- Render UI. Create/work on `view.js`, create/work on a class named `UI`, create/work on `render` method and use it for rendering/initializing.
- Create `style.css`, use bootstrap. (this section will be updated)
- Home page needs

  - Responsive website

  **Header**

  - Create collapse navigation bar (`links` to other pages, `sign up`, `sign in buttons`,`tutorials`,`practice-test`,`browse-tests`, `profile`, `free sample test`, `our logo`)

  **Main Section**

  - Create a `video` tag . App tutorial (short , and it starts automatically when the page loaded)
  - Create some `cards` for example for the tests; an `img` tag, short `comment` `<p>` below it when click the photo then it goes to the test page. An `img` tag, short `comment` `<p>` below it when click the photo then it goes to the practical information page.

  **Footer**

  - `Copyright`, `Contact` information...

## 2. User Story: Sign up

A user can sign up / register online (self-registration).
in the register part we ask the user : - name and surname - mail - country - city - age - create password - secret question and answer to reset his password. - ...
labels: `frontend`, `view`, `style`, `backend`, `route`

**FRONTEND**

- Create an interface for user to sign up.
  - Create `label`, `input` for
    - name
    - surname
    - mail
    - country
    - city
    - age
    - password
    - secret question
    - answer to reset his password.
- Render UI. When user clicks `sign up button` it will be `render`ed. Create/work on `view.js`, create/work on a class named `UI`, create/work on `render` method.

**BACKEND**

- Access to `db`... Write new user to `db`.
- Build `route`. Send confirmation/error `response` (`Successfully signed up`).
- Open `home page with message = Welcome "new user"`.

## 3. User Story: Login

A user can login by using username and password.

labels: `frontend`, `view`, `style`, `backend`, `route`

**FRONTEND**

- Create an interface for user to login.
- Render UI. When user clicks `login button` it will be `render`ed. Create/work on `view.js`, create/work on a class named `UI`, create/work on `render` method.
- `User name` `div` `text` will be changed as `userName`.

**BACKEND**

- Access to `db`... Check the user if exists or not.
  - If the `backend route` verifies users authentication, user will be directed to homepage.
  - If the `backend route` doesn’t accept users authentication, an error message will be shown and request re-entry.
- Write table user as online.
- Build `route`. Send `confirmation` or `error` `response` (`Successfully signed in`).

## 4. User Story: Logout

A user can logout.

labels: `frontend`, `view`, `style`, `backend`, `route`

**FRONTEND**

- Render UI. When user clicks `logout button` it will be `render`ed. Create/work on `view.js`, create/work on a class named `UI`, create/work on `render` method.
- `User name` `div` `text` will be changed as `blank('')`.

**BACKEND**

- Access to `db`... Check the user if exists or not.
- Write table user as offline.
- Build `route`. Send confirmation/error `response`.

## 5. User Story: Recover/Reset Password

- A user can recover/reset his/her password by clicking forget password link.

- Create an interface (`frontend`) asks user for email address,
- if email address exists (`backend`),
- ask in a new interface security question (`frontend`)
- is answer is correct (`backend`)
- ask for new password (`frontend`)
- reset it (`frontend`)
- and go to home page.

## 6. User Story: User Page

- As an registered user can see a page specialized for him after logged in and then clicked his name.

Create links for reading materials.
Create links for tests.
Create link for results.

Ideas about what the page should have..

- user can enroll for test
- user can take exam
- user can see his correct and incorrect answers.
- user can write comment/questions/feedback
- user can view test result
- update profile(optional)
- user can logged out


## 7. User Story: Teacher Page (This page is "nice to have")

- As an teacher user can see a page specialized for him.

        - As an registered teacher can grant user to take re-exam
        - For uploading if teachers give an excel

        | comment | question | answer | photo link |
        | --- | --- | --- | --- |
        | You are in a car... | You are in a car. | True | www.dropbox.com/asd/ad.img |
        | You are in a car... | You should close your eyes. | False | www.dropbox.com/asd/ad.img |

        - we can convert excel in a json and then upload the questions easily. So we only need upload excel document `UI`, and `convert it to JSON logic`. when user sends that `request to backend`, it will `write` to `db`.

**FRONTEND**

- There is a `modify sources(tests and tutorial)` button , when he clicks, it goes to the another page.
  - Create 2 `buttons` for `sources` and `tests`.
  - `sources` button for `sources page`. All the materials will shown here, Create an `add` button to add new material.
  - when he clicks the `add` button it opens `form` for uploading. in the `form` there will be `box?` for uploading pictures or videos and `text area` for text information and `input` for heading.
  - Bottom of each material(video or text) there will be `delete` button and `change` button.
  - when `delete` button clicked then first ask that `are you sure to delete this part?`(for materials)
  - When `tests` clicked he goes to the tests page. there he can see all the tests and and `add` button to add new question.
  - when he click the `add` button then it opens a `form`. in the `form` tag there is `box?` for picture uploading, there are `input`s for subquestions and answers.
  - Bottom of each test there will be `delete` button and `change` button.
  - when `delete` button clicked then first ask that `are you sure to delete this part?` (for tests)
- There is a `statistics` button. when he clicks the button , user sees the statistics. (how many students are enrolled for the course, test success of students , in which courses students have difficulties,... )

**BACKEND**

- when the user `clicked` the `add` button in the sources, run `add.js` , go to `db` and add the uploaded file to the folder.(for materials)
- when the user `clicked` the `add` button in the sources, run `add.js` , go to `db` and add the uploaded file to the folder.(for tests)
- Run `delete.js` and access to `db` and delete that part.(for materials)
- Run `delete.js` and access to `db` and delete that part.(for tests)
- when the user clicked the `change` button then run `change.js` and access to `db` and change that part.(for materials)
- when the user clicked the `change` button then run `change.js` and access to `db` and change that part. (for tests)
- when the user click the `statistics` button it gets necessary information from `test` page.

## 8. User Story: Add Tutorial Materials

- A registered user with teacher role can add practice test questions and tutorials.

- This is detailed in `Teacher Page`

## 9. User Story: Update Tutorial Materials

- A registered user with teacher role can add practice test questions and tutorials.

- This is detailed in `Teacher Page`

## 10. User Story: Delete Tutorial Materials

- A registered user with teacher role can add practice test questions and tutorials.

- This is detailed in `Teacher Page`

## 11. User Story: Tests Page

- As an registered user can reach tests list with results.

* A user can see his total time 20 minutes for 20 questions X 4 sub-questions = 80 questions.
* A user can take re-exam(re-test).

- A user can go back and next question. (in real test it can't be so no need)
- if a user don't finish the test and later he wants to solve remaining questions, the test will continue where he stopt. (what is about time??? is it freezes?)

**FRONTEND**

- create a table with one column titles (links) shown in rows for all the tests, one column result.
- Render UI. Create `Test` folder. Create/work on `view.js`, create/work on a class named `UI`, create/work on `render` method and use it for rendering/initializing.
- Create `style.css`, use bootstrap.
- It will be responsive.

**BACKEND**

- Read Test names from `Test Table`. and send them as a respond. (x)

## 12. User Story: Test Page

- As an registered user can take a test.

**FRONTEND**

- A button when it is clicked to see all the tests with its title and pictures.
- A button when it is clicked to see his test results for any test separately.
- A button for next question.
- A button for back question.
- In test page there will be a picture of question, sound of question and 4 different sub-questions are related with this question.
- A button for sound of question description.
- 4 buttons for each sub-question sound.
- For each sub-question there will be yes and no checkboxes.
- A button to see his results.
- A button when it is clicked he can do test again.
- An icon to see the time.

**BACKEND**
  Initialization
- Create one method/function to read from db on `situation` table `text`, `image`, `audio` columns test-related situation.
  and on `question` table `text`, `audio` columns situation-related question.

  After click `End My Test`
- Create one method/function to read from db on `situation` table `image` columns test-related situation.
  and on `option` table `correctOption` columns question-related option to make see which questions are correct which are wrong.

- Create one method/function to write to db on `result` table `correctCount` columns which relates chosen test.

## 13. User Story: Results

- A registered user can reach his results/scores.

Ideas about what the page should have..

- as a user he can see the the solution/corrections at the end of each test.
- as a user if he click any test in the `results` page , he can see the result of his test.
- as an teacher he can see the average of the student success in the teacher page.(optional)
- as an teacher he can see the total number of the students in the teacher page.(optional)

**FRONTEND**

- there are `img` tags for each test. if user is successful in that course image has a `green` border. otherwise it has a `red` border.
- at the bottom of each `img` there are 3 `text` areas, `correct answer` , `incorrect answer` , `total question`
- each `img` has a link for the result of that test. when user click the test then user see the correct answers of the questions.
  - there are `img` tags for each question. if it is correct answered then the image has a `green` border otherwise it has a `red` border.
  - at the bottom of the image there will be sub-questions with the correct answers.

**BACKEND**

- to show the correct answer amount for each test, it `render` his answers with the correct answers and save this statistics to `statics` table on `db`. (x)
- it gets the correct answers , user's answers , questions from `db` when the page `loaded`.(x)
- after rendering all user answers , we compute average success of any test and save it in `db`. (optional)
- ...

## 14. User Story: Comments Write/send/read (user page)

- A registered user can add comment and see all the comments.
- A registered user with teacher role can reply to comment/feedbacks.

- Create a section for writing (`frontend`) comment
- Create a button to send comment (`frontend`) it.
- Comment text will saved in `Comment table` with `user id`, `test name`, `date and time`.

  Ideas about what the page should have..

## 15. User Story: Tutorials

- A registered user can see tutorials.

- Create like youtube's videos page that lists all of the videos or page by page.

## 16. Testing

- Be sure all app sections works properly. Making sure your deployed app works for the live demo.

## 17. Deploying App

- Deploy app to make it online and accessible for the users. Use `Heroku` or another method.

## 18. Complete readme.md

- Complete readme.md for more details about the app.

Ideas about what the page should have..

- Contributions,
- All the contact infos about team members.
- ! This section can be updated always to make a perfect readme.

## 19. Presentation

- Preparing a presentation where everyone in the team will speak.

## 20. Video

- A short video add for the project.
