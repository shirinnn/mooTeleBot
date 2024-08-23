# mooTeleBot
A telegram bot which can help on checking public transport bus timing on telegram


Starting Node.js project
command: npm init

Install Node Telegram Bot Library
command: npm install node-telegram-bot-api

To Safely Merge into main branch:
- Usual Approach while developing
git checkout master
git pull
git checkout test
git log master.. # if you're curious
git merge origin/test # to update your local test from the fetch in the pull earlier
When you're ready to merge back into master,

-When ready to merge back to main branch
git checkout master
git log ..test # if you're curious
git merge test
git push

