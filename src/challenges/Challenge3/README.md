Endpoints:
http://localhost:4200/countries
http://localhost:4200/users

Steps:

1. Create a custom hook useCountryApiClient at src/challenges/Challenge3/api-clients

- Use axios when creating the hook.
- All the methods must be correctly typed.
- It must return a list method for getting all the countries.

2. Create a custom hook useUserApiClient at src/challenges/Challenge3/api-clients

- Use axios when creating the hook.
- It must return list, create, update and remove methods for getting all API crud operations.
- All the methods must be correctly typed.
- (Optional as plus) Implement patch method.

3. Redux pattern requirement:

- Add the missing payload types to the actions hooks.
- Connect the country and user reducers with the global redux state.

4. Complete the crud methods on the component.
5. Modified users data must be visible on the table from what is on the redux store.
