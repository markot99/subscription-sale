# Subscription-Sale

## Installation
Before starting, all necessary dependencies must be installed with the following command:

```console
npm install
```

Afterwards the frontend can be started with the following command:
```
npm start
```

Now the frontend should be reachable under the following address

[http://localhost:3000](http://localhost:3000)

## Special Features
- If the data is not yet available, placeholders (skeletons) are displayed
- The language of the website depends on the browser language
- No username is used, but an e-mail address. This email address is validated and duplicate registration is prevented.
- In addition to the address, the country can also be selected in the configurator. If a country other than that of the newspaper publisher is selected, the averaged distance to the coordinates of the country is calculated. A check of the postal code no longer takes place. If Germany is selected, the postal code is checked.
- A validation of the house number and postal code on numbers only was deliberately omitted in order to allow, for example, also "75-A" as house number or "EC1A 1AA" as postal code in other countries.
- Depending on the delivery frequency (Weekend, Every day) the start date is blocked.
- Depending on the delivery frequency (weekend, every day) the possible start dates are adjusted.
- On the personal page the user can view all subscriptions and change the data.
- The site is designed responsively.
- Access to certain pages, e.g. the personal data is blocked without login.
