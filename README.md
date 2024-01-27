# Booking system - Dung Phan

This is a SPA using React which shows a list of rooms, details of available seats and also allows users to book the seats. This project is scaffolded with [Vite](https://vitejs.dev/guide/why.html).

[Click here to check out the live version](https://book-a-room-ewjm92wmn-dung-phan.vercel.app/rooms)

### Installation

1. Install Node.js and npm
   - Install NVM to manage Node.js versions. This allows for an easy switch between Node versions (a minimum Node.js version of **14.15.0** is required). Follow the [NVM Repository](https://github.com/nvm-sh/nvm) for a complete installation guide.
   - Install the latest stable version:

   ```bash
   $ nvm install --lts
   ```
  
2. Install the project dependencies:
      ```bash
      $ npm install
      ```
3. Start the app:
      ```bash
      $ npm run dev
      ```
4. Run tests: 
      ```bash
      $ npm test
      ```

### Technical choices:

1. [React Query](https://tanstack.com/query/latest/docs/react/overview)
   
2. [Chakra UI](https://chakra-ui.com/)
   
3. [MSW](https://mswjs.io/)

4. [react-hook-form](https://react-hook-form.com/) 

5.  [yup](https://github.com/jquense/yup) 

### User Experience improvement
- Improve content display when data is loading, or when there is no data/ error in retrieving data. Currently I'm using a general progress bar for a quick solution but it's not as ideal. (Preferably using skeleton components)
- When submitting the booking, users currently receive no feedback whether it succeeds or not (an info alert would be helpful).
- When clicking to book the room, the user should be able to see all the room details instead of the form. 
- The client-side validation for the booking form still needs some improvement (ie: users can type "e" or "E" for spots)
- There should be a 404 page. It's currently just an empty page when users navigate to non-existing routes

### Dev improvement
- Add extra test cases for the RoomPage when we are loading data or get errors from retrieving data
- Support absolute import ("../../.." is not readable)
- Move responsive styling and some of the custom components to the global theme instead of keeping them local.
- Props type (`RoomDetails`) is currently manually written, but it should be automatically generated. 